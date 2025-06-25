import React from "react";
import { Download, FileText } from "lucide-react";

const About = () => {
  const stats = [
    { number: "4+", title: "Years Experience" },
    { number: "10+", title: "Projects Completed" },
    { number: "2+", title: "Certifications" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full Stack Developer with proven expertise in building scalable,
            secure, and high-performance applications across fintech, edtech,
            and telecom sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-blue-600 font-semibold">
                  Full Stack Developer
                </span>{" "}
                specializing in{" "}
                <span className="text-blue-600 font-semibold">
                  React.js, Spring Boot, and cloud-native solutions
                </span>
                . I build secure, scalable applications with modern web
                technologies and intuitive user experiences.
              </p>

              <p className="text-lg leading-relaxed">
                With a strong foundation in{" "}
                <span className="text-blue-600 font-semibold">
                  JavaScript, Java 11, TypeScript, and Python
                </span>
                , I enjoy solving complex problems, crafting reusable UI
                components, and implementing efficient backend microservices.
              </p>

              <p className="text-lg leading-relaxed">
                I have hands-on experience with{" "}
                <span className="text-blue-600 font-semibold">
                  AWS, Docker, Kubernetes, Kafka, and JWT-based security
                </span>
                . I'm passionate about building reliable systems with clean
                code, optimized performance, and real-time capabilities.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, I explore new technologies, contribute to
                open-source, and share knowledge with the tech community.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover-lift custom-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
