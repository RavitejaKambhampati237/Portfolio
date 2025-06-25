import React, { useState, useEffect } from "react";
import { Download, Code } from "lucide-react";
import { Linkedin, Github, Mail } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Java Developer",
    "React Specialist",
    "Cloud Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fadeInUp">
              <h3 className="text-4xl lg:text-6xl font-bold font-raleway text-white mb-6 text-shadow leading-tight">
                <span className="block animate-glitch">
                  Ravi Teja Kambhampati
                </span>
                <span className="block text-yellow-300">
                  Full Stack Developer
                </span>
              </h3>

              <div className="text-2xl lg:text-3xl text-white/90 mb-8 h-12">
                <span className="font-medium">{roles[currentRole]}</span>
                <span className="animate-pulse">|</span>
              </div>

              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                I build scalable, secure, and high-performance web applications
                with modern technologies like React, Spring Boot, AWS, and
                Docker. Passionate about clean code, performance optimization,
                and bringing ideas to life through tech.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/1Ynzy-CDiCC5qfTUyrH_HUVxYVEcTfGnS/view?usp=drive_link" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Code size={20} />
                  View My Work
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/ravi-teja-kambhampati-2a77ba209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/ravitejakambhampati237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ravitejakambhampati23@gmail.com"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className="relative animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl opacity-70 group-hover:blur-3xl transition-all duration-500"></div>

                <img
                  src="/ResumePicture.jpg"
                  alt="Ravi Teja"
                  className="w-full h-full object-cover rounded-full border-4 border-white/10 opacity-90"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
