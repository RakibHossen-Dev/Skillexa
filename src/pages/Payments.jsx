import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
// import { CheckCircle } from "lucide-react";

const Payments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // const handlePayment = () => {
  //   alert(`User: ${name}, Email: ${email}, Amount: $${amount}`);
  // };
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  // const stripePromise = loadStripe("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white py-8 px-4 shadow-md rounded-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Make a Payment
        </h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
      {/* <div className="w-full max-w-md bg-white shadow-xl p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Make a Payment
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mt-4"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-4"
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mt-4"
        />
        <button
          onClick={handlePayment}
          className="w-full mt-4 p-2 bg-blue-600 text-white rounded"
        >
          Pay Now
        </button>
       
      </div> */}
    </div>
  );
};

export default Payments;
