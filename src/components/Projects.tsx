import React from "react";
import { Github, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Uber Data Analysis",
      description:
        "In-depth analysis of Uber trip datasets focusing on data cleaning, handling missing values and outliers, and ensuring data consistency. Visualizations uncover trends and statistical techniques analyze trip purposes.",
      tags: ["Data Analysis", "Python"],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      liveUrl: "",
      githubUrl: "https://github.com/RavitejaKambhampati237/uber_data_analysis",
      private: false,
      image:
        "https://daxg39y63pxwu.cloudfront.net/images/blog/uber-data-analysis-project-using-machine-learning-in-python/uber_data_analysis_project.webp",
    },
    {
      title: "Real Time Threat Intelligence",
      description:
        "Comprehensive full-stack application integrating modules like Asset Management, Threat Intelligence, Vulnerability Risk Assessment, Incident Response, and Crisis Management with two-factor authentication.",
      tags: ["Full Stack", "Security"],
      tech: ["ReactJS", "NodeJS", "HTML", "CSS", "MongoDB"],
      liveUrl: "",
      githubUrl: "",
      private: true,
      image: "https://www.bitlyft.com/hubfs/iStock-1304058564.jpg",
    },
    {
      title: "Project Management Application",
      description:
        "A project management application built with React, allowing users to create and manage projects, tasks, and track due dates. Fully responsive design with Tailwind CSS for seamless task management.",
      tags: ["Web App", "React"],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/RavitejaKambhampati237/project_management",
      private: false,
      image:
        "https://www.educationalappstore.com/images/uploads/2018/09/project-management-750x350.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {!project.private && project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-300"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                  {project.private && (
                    <span className="text-gray-500 font-medium flex items-center gap-1 cursor-not-allowed">
                      <Lock size={16} /> Private Repo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
