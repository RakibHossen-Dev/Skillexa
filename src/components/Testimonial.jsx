import { MdArrowBack, MdArrowForward } from "react-icons/md";
import testimonial from "../assets/testimonial1.jpg";
import { useRef } from "react";

const Testimonial = () => {
  const slider = useRef();
  const txRef = useRef(0);

  const sildeForward = () => {
    if (txRef.current > -50) {
      txRef.current -= 25;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  };

  const sildBackward = () => {
    if (txRef.current < 0) {
      txRef.current += 25;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  };

  return (
    <div className="w-11/12 mx-auto my-16  pb-10">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        What <span className="text-blue-700">Students Say</span>
      </h2>
      {/* <h4 className="text-xl text-blue-700 text-center mb-1 uppercase">
        Testimonial
      </h4>
      <h3 className="text-3xl font-bold text-black text-center">
        What Students and Instructors Say
      </h3> */}
      <div className="my-8 mx-auto py-0 md:px-20 px-10 relative">
        <button onClick={sildeForward}>
          <MdArrowForward className="text-white text-3xl p-1 lg:text-5xl bg-blue-700 rounded-full md:p-2 absolute top-1/2 right-0 -translate-y-1/2" />
        </button>
        <button onClick={sildBackward}>
          <MdArrowBack className="text-white text-3xl p-1  lg:text-5xl bg-blue-700 rounded-full md:p-2 absolute top-1/2 left-0 -translate-y-1/2" />
        </button>
        <div className="overflow-hidden">
          <ul
            ref={slider}
            className="flex   gap-5 md:w-[200%] w-[400%] transition-transform duration-300 ease-in-out"
          >
            {/* <li className="w-1/4">
              <div className="shadow-xl p-8 rounded-sm space-y-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-blue-700"
                    src={testimonial}
                    alt="Ayesha Rahman"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      Ayesha Rahman
                    </h3>
                    <p>Edusity, USA</p>
                  </div>
                </div>
                <p>
                  Skillexa has completely changed my approach to learning. The
                  courses are well-structured, engaging, and easy to follow. I
                  gained real-world skills that I could apply immediately!
                </p>
              </div>
            </li> */}
            <li className="w-1/4 border lg:h-auto h-80 ">
              <div className="  lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-blue-700"
                    src={testimonial}
                    alt="John Doe"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      John Doe
                    </h3>
                    <p>TechGuru, UK</p>
                  </div>
                </div>
                <p>
                  The platform is intuitive, and the instructors are fantastic.
                  I feel more confident in my skills now.
                </p>
              </div>
            </li>
            <li className="w-1/4 border lg:h-auto h-80 ">
              <div className="  lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-blue-700"
                    src={testimonial}
                    alt="Maria Lopez"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      Maria Lopez
                    </h3>
                    <p>DevTech, Canada</p>
                  </div>
                </div>
                <p>
                  Learning at Skillexa was a game changer for my career. The
                  lessons are practical and engaging.
                </p>
              </div>
            </li>
            <li className="w-1/4 border lg:h-auto h-80 ">
              <div className=" lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-blue-700"
                    src={testimonial}
                    alt="Rahul Sen"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      Rahul Sen
                    </h3>
                    <p>Innovate IT, India</p>
                  </div>
                </div>
                <p>
                  An outstanding platform for learners and professionals. The
                  variety of courses is unmatched.
                </p>
              </div>
            </li>
            <li className="w-1/4 border lg:h-auto h-80 ">
              <div className=" lg:p-14 p-6 rounded-sm space-y-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full border-4 border-blue-700"
                    src={testimonial}
                    alt="Rahul Sen"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                      Ayesha Rahman
                    </h3>
                    <p>Innovate IT, India</p>
                  </div>
                </div>
                <p>
                  Skillexa has completely changed my approach to learning. The
                  courses are well-structured, engaging
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
