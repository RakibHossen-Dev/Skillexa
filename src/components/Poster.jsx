import posters from "../assets/poster.webp";

const Poster = () => {
  return (
    <div className="my-20 bg-[#ECEDEF] pt-10 pb-8 md:pb-0">
      <div className="w-11/12 mx-auto flex justify-center lg:gap-0 gap-5 items-center md:flex-row flex-col">
        <div className="md:w-1/2">
          <img src={posters} alt="" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl lg:text-6xl font-extrabold">
            Join a Community of <span className="text-blue-700">100+</span>{" "}
            Esteemed Instructors
          </h2>
          <p>
            Empower learners, share your expertise, and make a lasting impact —
            while advancing your own career. Become an instructor with Skillexa
            and inspire change on a global scale.
          </p>
          <button className="bg-blue-700 py-2 px-6 text-white font-semibold rounded-md">
            Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
