import React, { useState } from 'react';
import { motion } from "framer-motion";
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
  Calendar,
  Send,
  MessageSquare,
  CalendarDays
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Me",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "developer@example.com",
      link: "mailto:developer@example.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Schedule Call",
      link: "https://calendly.com/yourusername"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-16 space-y-12 "
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing new projects&lsquo; creative ideas or opportunities to be part of your visions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Methods */}
        <motion.div 
          variants={containerVariants}
          className="space-y-6 lg:col-span-1 "
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="block "
            >
              <Card className="p-6 bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-gray-300 dark:border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-primary/10 hover:text-primary transition-colors"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-2"
        >
          <Card className="p-8 bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-gray-300 dark:border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Bhupesh Kumar"
                    className="border border-gray-300 dark:border-white/20"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="bhupesh@example.com"
                    className="border border-gray-300 dark:border-white/20"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Project Discussion"
                  className="border border-gray-300 dark:border-white/20"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your message here..."
                  className="min-h-[150px] border border-gray-300 dark:border-white/20"
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex justify-end"
              >
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="flex items-center space-x-2"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <MessageSquare className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Calendar Integration */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule a Call
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Book a 30-minute introduction call
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://calendly.com/bhupeshb7-8581', '_blank')}
                  className="flex items-center space-x-2"
                >
                  <CalendarDays className="h-5 w-5" />
                  <span>Book Call</span>
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;