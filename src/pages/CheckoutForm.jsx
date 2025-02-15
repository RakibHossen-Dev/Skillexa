import { Button } from "@/components/ui/button";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { AuthContext } from "@/providers/Authprovider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.courses;
  const coursePrice = parseInt(course?.price);
  console.log(coursePrice);
  console.log(clientSecret);

  useEffect(() => {
    if (coursePrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: coursePrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, coursePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      // post api

      const enrollCourseInfo = {
        coursesId: course._id,
        courseTitle: course.courseTitle,
        courseBanner: course.courseBanner,
        date: course.date,
        category: course.category,
        language: course.language,
        difficulty: course.difficulty,
        price: course.price,
        skills: course.skills,
        enrollStudentEmail: user?.email,
        instructorName: course.instructorName,
        instructorEmail: course.instructorEmail,
        instructorPhoto: course.instructorPhoto,
        lectures: course.lectures,
        description: course.description,
      };
      console.log("enrollCourseInfo", enrollCourseInfo);
      axiosPublic.post("/EnrollmentCourses", enrollCourseInfo).then((res) => {
        console.log(res);
        console.log(res.data.insertedId);
        if (res.data.insertedId) {
          toast.success("Course enrolled successfully! ✅");
          navigate("/dashboard/myCourse");
        }
      });

      // post api
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border py-2 px-4 w-[350px] rounded-sm">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        {/* <button type="submit" disabled={!stripe}> */}
        <p className="text-sm text-red-500 mt-3">{error}</p>
        <Button
          className="mt-4 bg-blue-700 hover:bg-blue-900 w-full"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay (${coursePrice})
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
