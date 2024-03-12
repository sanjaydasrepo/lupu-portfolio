import React from "react";
import { Link } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faVideo,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lups from '../assets/lups.jpg';

const Landing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <img
              src={Lups}
              alt="Lupa Mudra Das"
              className="w-[8rem] h-[8rem] rounded-full mr-6 object-center"
            />
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">
                Lupa Mudra Das
              </h1>
              <p className="text-xl text-gray-600">Web Developer</p>
              <div className="flex items-center mt-4">
                <a
                  href="https://www.linkedin.com/in/lupamudradas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500 mr-4"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                  </svg>
                </a>
                <a
                  href="https://github.com/lupamudra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              ABOUT ME
            </h2>
            <div className="text-gray-700 space-y-6">
              <p>
                Hello there! I'm thrilled to welcome you to my portfolio. I am a
                passionate web developer with a strong foundation in JavaScript,
                CSS, HTML5, and GitHub.
              </p>
              <p>
                As a fresher in the field, I am excited to start my journey and
                apply my knowledge to real-world projects. I am a quick learner
                and always eager to expand my skill set.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              What I do!
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-md p-3 mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <FontAwesomeIcon
                        icon={faCode}
                        className="h-6 w-6 text-white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Web Development
                  </h3>
                </div>
                <p className="text-gray-700">
                  I specialize in creating dynamic and responsive websites using
                  HTML, CSS, and JavaScript. I am proficient in leveraging
                  modern frameworks and libraries to build efficient and
                  scalable web applications.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-md p-3 mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <FontAwesomeIcon
                        icon={faVideo}
                        className="h-6 w-6 text-white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Writing
                  </h3>
                </div>
                <p className="text-gray-700">
                  Writing is one of my passions. I enjoy expressing my thoughts
                  and ideas through written words. Whether it's crafting
                  engaging blog posts or creating compelling content, I find joy
                  in the power of storytelling.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-md p-3 mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <FontAwesomeIcon icon={faVideo} className="h-6 w-6 text-white" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Content Creation
                  </h3>
                </div>
                <p className="text-gray-700">
                  I have a knack for creating engaging and informative content.
                  From writing articles to producing videos, I enjoy the process
                  of researching, organizing, and presenting information in a
                  way that captivates the audience.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-md p-3 mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 text-white" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cooking
                  </h3>
                </div>
                <p className="text-gray-700">
                  Cooking is another passion of mine. I love experimenting with
                  different flavors and cuisines. Creating delicious meals and
                  sharing them with others brings me immense joy and
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/resume"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Lupa Mudra Das. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
