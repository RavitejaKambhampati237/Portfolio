import React from "react";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Wells Fargo",
      position: "Full Stack Java Developer",
      duration: "Jan 2024 - Present",
      location: "San Francisco, CA (Remote)",
      description: [
        "Designed and developed RESTful APIs and microservices using Java 11, Spring Boot, and Hibernate.",
        "Built responsive UI with React, integrated backend services via REST APIs for smooth user experience.",
        "Implemented scalable state management using Redux, Context API, and React Query.",
        "Developed Kafka Stream modules for real-time data processing with Zookeeper.",
        "Configured and optimized PostgreSQL, implemented query performance improvements.",
        "Deployed secure, scalable solutions on AWS EC2, S3, RDS, ECS, and EKS with CI/CD pipelines via Jenkins.",
        "Integrated Splunk for centralized logging, enhanced monitoring with ELK Stack and CloudWatch.",
        "Enhanced API security using Node.js, Express.js, JWT, and CSRF protection.",
      ],
      technologies: [
        "Java 11",
        "Spring Boot",
        "React",
        "Redux",
        "Kafka",
        "AWS",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Splunk",
        "ELK Stack",
        "JWT",
      ],
    },
    {
      company: "Amdocs",
      position: "Full Stack Developer",
      duration: "Nov 2022 - Jun 2023",
      location: "Hyderabad, India",
      description: [
        "Developed scalable microservices with Spring Boot, integrated with Feign Clients and Kafka.",
        "Implemented JWT-based authentication and role-based access with Spring Security.",
        "Built interactive, responsive UIs using ReactJS, Next.js, Redux, and Tailwind CSS.",
        "Optimized SEO and performance with Next.js SSR, lazy loading, and accessibility standards.",
        "Containerized applications using Docker, deployed on Kubernetes with AWS EC2 and S3.",
        "Automated builds and deployments with Jenkins, Maven, and Git for continuous delivery.",
        "Collaborated in Agile teams, conducted code reviews, and improved backend performance.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "JWT",
        "Kafka",
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
      ],
    },
    {
      company: "BYJU'S (Toppr)",
      position: "Software Engineer - Frontend",
      duration: "Jun 2021 - Nov 2022",
      location: "Bengaluru, India",
      description: [
        "Modernized frontend with React 18, Webpack 5, and Babel, improving page load speed by 30%.",
        "Built reusable UI components following atomic design principles to reduce code duplication.",
        "Transformed Figma designs into pixel-perfect, responsive interfaces using Tailwind CSS and Bootstrap.",
        "Managed asynchronous data flows using Axios, Redux, Thunk, and Context API.",
        "Enhanced usability with form validation, dynamic rendering, and conditional logic.",
        "Integrated REST APIs, improved client-side performance with lazy loading and code splitting.",
        "Maintained CI/CD pipelines with Jenkins and Git, ensured code quality with Jest and React Testing Library.",
      ],
      technologies: [
        "ReactJS",
        "Redux",
        "Context API",
        "Tailwind CSS",
        "Bootstrap",
        "Axios",
        "Webpack",
        "Jest",
        "Jenkins",
        "Firebase",
        "MongoDB",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800 hidden lg:block"></div>
          <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-500 to-blue-800 lg:hidden"></div>

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "lg:flex-row lg:justify-start"
                    : "lg:flex-row-reverse lg:justify-start"
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div
                  className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${
                    index % 2 === 0
                      ? "lg:mr-auto lg:pr-8"
                      : "lg:ml-auto lg:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-700 leading-relaxed"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
