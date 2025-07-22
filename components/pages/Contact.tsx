import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  CalendarDays,
  ArrowUpRight,
  Star,
  Zap,
  Globe,
  Clock
} from "lucide-react";

const ContactSection = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({ name: "", email: "", subject: "", message: "" });
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

   

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Me",
      value: "+91 8581869783",
      link: "tel:+918581869783",
      description: "Available Mon-Fri, 9AM-6PM IST",
      gradient: "from-blue-500 to-indigo-600",
      color: "text-blue-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "b29.bhupesh@gmail.com",
      link: "mailto:b29.bhupesh@gmail.com",
      description: "I'll respond within 24 hours",
      gradient: "from-purple-500 to-pink-600",
      color: "text-purple-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Patna, Bihar, India",
      link: "https://maps.google.com/maps?q=Patna,+India&hl=en",
      description: "UTC+5:30 Timezone",
      gradient: "from-emerald-500 to-teal-600",
      color: "text-emerald-600"
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/BhupeshB7",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Portfolio",
      link: "#",
      color: "hover:bg-indigo-600 hover:text-white"
    }
  ];

  const features = [
    { icon: <Zap className="h-4 w-4" />, text: "Quick Response" },
    { icon: <Star className="h-4 w-4" />, text: "Quality Work" },
    { icon: <Clock className="h-4 w-4" />, text: "On Time Delivery" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">💼 Let&apos;s Work Together</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
            Get In Touch
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I&apos;m always excited to discuss new opportunities, creative ideas, and innovative solutions.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-blue-600 dark:text-blue-400">{feature.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Methods - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ 
                  animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <a
                  href={method.link}
                  className="block relative"
                >
                  <Card className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${method.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {method.title}
                        </h3>
                        <p className={`font-medium ${method.color} dark:text-gray-200 mb-1`}>
                          {method.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {method.description}
                        </p>
                      </div>
                      
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </Card>
                </a>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                  title={social.label}
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both`
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form - Right Side */}
           <div
      className="lg:col-span-3"
      style={{ animation: `slideInRight 0.6s ease-out 0.2s both` }}
    >
      <Card className="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Send me a message
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className={`h-12 bg-white/50 dark:bg-gray-700/50 border-2 ${
                  errors.name
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-200 dark:border-gray-600"
                } focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <Input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                type="email"
                className={`h-12 bg-white/50 dark:bg-gray-700/50 border-2 ${
                  errors.email
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-200 dark:border-gray-600"
                } focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <Input
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Project Discussion / Collaboration"
              className={`h-12 bg-white/50 dark:bg-gray-700/50 border-2 ${
                errors.subject
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-200 dark:border-gray-600"
              } focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300`}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project, timeline, requirements..."
              className={`min-h-[140px] bg-white/50 dark:bg-gray-700/50 border-2 ${
                errors.message
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-200 dark:border-gray-600"
              } focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none`}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending Message...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </div>
            )}
          </Button>
        </form>

        {/* Calendly Call Section */}
        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Prefer a quick call?
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Schedule a 30-minute consultation call to discuss your project
            </p>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://calendly.com/bhupeshb7-8581", "_blank")
              }
              className="bg-white/50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
            >
              <CalendarDays className="h-5 w-5 mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </Card>
    </div>
        </div> 
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;