import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-14 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Frank, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            As a recent graduate student, I bring a strong foundation in
            programming languages and design principles through
            university education and internships; enriched by hands-on
            experience collaborating with senior software engineers.
            Comfortable in both collaborative and individual settings, I
            am known for my strong work ethic, adaptability, and quick
            learning abilities. Skilled in time management and problem-
            solving, I am eager to leverage my technical skills in a real-
            world environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
