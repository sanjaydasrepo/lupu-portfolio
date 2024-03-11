import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project 1',
    imageUrl: 'path/to/project1-image.jpg',
    technologies: ['JavaScript', 'React', 'Node.js'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/lupamudra/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2',
    imageUrl: 'path/to/project2-image.jpg',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/lupamudra/project2',
  },
  // Add more projects as needed
];

const Work: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore a selection of my recent projects showcasing my web development skills.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <img
                  className="h-48 w-full object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {project.technologies.join(', ')}
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;