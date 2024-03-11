import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg text-gray-500">
              Hello! I'm Lupa Mudra Das, a passionate web developer and a fresher in the field. With a strong foundation in JavaScript, CSS, HTML5, and GitHub, I am eager to create engaging and interactive web experiences.
            </p>
            <p className="text-lg text-gray-500">
              As a fresher, I am excited to start my journey in the world of web development. I have been honing my skills through personal projects and online courses, and I am ready to apply my knowledge to real-world challenges. I am a quick learner and always eager to expand my skill set.
            </p>
            <p className="text-lg text-gray-500">
              Apart from coding, I have a passion for writing, reading novels, creating content, and cooking. These hobbies allow me to express my creativity and bring a unique perspective to my work. I believe in the power of storytelling and strive to create meaningful and engaging experiences for users.
            </p>
            <p className="text-lg text-gray-500">
              I am excited about the opportunity to collaborate with talented individuals and contribute to innovative projects. If you have an interesting project or want to discuss the latest trends in web development, feel free to reach out. I am always ready to learn, grow, and make a positive impact through my work.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Skills</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900">Technical Skills</h4>
                <ul className="mt-2 space-y-1">
                  <li className="text-base text-gray-500">JavaScript</li>
                  <li className="text-base text-gray-500">CSS</li>
                  <li className="text-base text-gray-500">HTML5</li>
                  <li className="text-base text-gray-500">GitHub</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900">Hobbies</h4>
                <ul className="mt-2 space-y-1">
                  <li className="text-base text-gray-500">Writing</li>
                  <li className="text-base text-gray-500">Novel Reading</li>
                  <li className="text-base text-gray-500">Content Creation</li>
                  <li className="text-base text-gray-500">Cooking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;