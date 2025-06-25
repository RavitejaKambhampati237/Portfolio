import React from "react";
import { BadgeCheck, GitBranch } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "SnowFlake",
      subtitle: "SnowPro Core COF-C02",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-2ab81f2c-0503-4adc-bc1b-927568a3d3b6.jpg?v=1739403511000",
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Git",
      subtitle: "Git With Visual Studio Code",
      link: "https://www.udemy.com/certificate/UC-ddc6cf50-8d9f-43d8-ab86-3179952e0b7e/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email",
      icon: <GitBranch className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Verified certifications and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div>{cert.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {cert.subtitle}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
