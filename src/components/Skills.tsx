import React from "react";
import { Code, Database, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "ReactJS",
        "Next.js",
        "Redux",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "AngularJS",
        "Vue.js",
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        "Java 11 (Spring Boot)",
        "Node.js",
        "Python (Flask, Django)",
        "Hibernate",
        "REST APIs",
        "Microservices",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "SQL",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, RDS, ECS, EKS)",
        "Docker",
        "Kubernetes",
        "CI/CD (Jenkins, Git)",
        "CloudWatch",
        "Splunk",
        "ELK Stack",
        "Azure",
      ],
    },
    {
      icon: Settings,
      title: "Tools & Others",
      skills: [
        "Git",
        "VSCode",
        "IntelliJ",
        "Jira",
        "Postman",
        "Jest",
        "React Testing Library",
        "Linux/Unix",
        "Kafka",
        "RabbitMQ",
        "JWT/CSRF Security",
        "Webpack",
        "Babel",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-raleway text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, secure, and
            high-performance applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
