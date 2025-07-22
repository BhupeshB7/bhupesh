import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Code, Terminal, Zap } from "lucide-react";

const CodeLine = ({ text, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const typing = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(typing);
        }
      }, 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`font-mono text-sm opacity-40 ${className}`}>
      <span className="text-blue-400">{">"}</span> {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
};

const FloatingElement = ({ className, children, delay = 0 }) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const codeSnippets = [
    "const developer = { name: 'YourName', passion: 'coding' };",
    "function createAmazingApps() { return innovation + creativity; }",
    "while(learning) { skills++; experience.push(newKnowledge); }",
    "git commit -m 'Building the future, one line at a time'",
    "npm run deploy // Dreams into reality ✨",
  ];

  return (
    <div className="relative   overflow-hidden ">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "slide 20s linear infinite",
          }}
        />
      </div>

      {/* Dynamic Gradient Orb */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, transparent 100%)`,
          left: `${mousePosition.x * 0.5}%`,
          top: `${mousePosition.y * 0.5}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating Code Elements */}
      <FloatingElement className="top-20 left-10" delay={0}>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-3">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="top-40 right-20" delay={1}>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-3">
          <Terminal className="w-6 h-6 text-green-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="bottom-40 left-20" delay={2}>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-3">
          <Zap className="w-6 h-6 text-yellow-400" />
        </div>
      </FloatingElement>

      {/* Background Code Animation */}
      <div className="absolute inset-0 flex flex-col justify-center items-end pl-8 space-y-4 pointer-events-none">
        {codeSnippets.map((code, index) => (
          <CodeLine
            key={index}
            text={code}
            delay={index * 800}
            className="transform -rotate-12"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center  py-12 px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Available for Work
            </span>
          </div>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 mb-12 text-center">
            <div className="group">
              <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                5+
              </div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="group">
              <div className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                100+
              </div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="group">
              <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                50+
              </div>
              <div className="text-sm text-slate-400">Happy Clients</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            {/* <button className="group px-8 py-4 border-2 border-slate-600 hover:border-blue-400 backdrop-blur-xl rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </div>
            </button> */}

            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 border-2 border-slate-600 hover:border-blue-400 backdrop-blur-xl rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-400/10 inline-block"
            >
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                Download Resume
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://github.com/BhupeshB7"
              target="_blank"
              className="p-3 border border-slate-700 hover:border-blue-400 rounded-full text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhupeshb7"
              target="_blank"
              className="p-3 border border-slate-700 hover:border-blue-400 rounded-full text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50px, -50px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
