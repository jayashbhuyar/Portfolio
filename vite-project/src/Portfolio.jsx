import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { 
  Code, 
  Database, 
  ChartBar, 
  Github, 
  Linkedin, 
  Download,
  Send,
  Briefcase,
  Award,
  Target,
  HomeIcon, 
  UserIcon, 
  CodeIcon, 
  BriefcaseIcon,
  Menu,
  X 
} from 'lucide-react';
import backgroundImage from './images/Screenshot 2024-08-20 162916.png';

const CreativePortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.7);

  const navSections = [
    { name: 'Home', icon: HomeIcon, link: '/' },
    { name: 'About', icon: UserIcon, link: '/about' },
    { name: 'Skills', icon: CodeIcon, link: '/skills' },
    { name: 'Projects', icon: BriefcaseIcon, link: '/projects' }
  ];
  const skills = [
    { name: "Frontend Development", icon: "path-to-icon" },
    { name: "Backend Development", icon: "path-to-icon" },
    { name: "Data Analysis", icon: "path-to-icon" },
    // Add more skills here
  ];
  
  const achievements = [
    { 
      title: "Won Housecup 2022", 
      description: "Led team to victory in Technovanza housecup, demonstrating leadership and teamwork." 
    },
    { 
      title: "Completed 100+ Leetcode Questions", 
      description: "Solved over 100+ problems, improving problem-solving and algorithmic skills." 
    },
    { 
      title: "Team Leadership in Technovanza", 
      description: "Led multiple teams in various events at Technovanza, showcasing leadership and project management." 
    },
    { 
      title: "Volunteer Work in Community Projects", 
      description: "Contributed to various community projects, demonstrating a commitment to social causes." 
    }
  ];
  

  // Enhanced Navigation Component
  const NavigationMenu = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-8 items-center'}`}>
      {navSections.map((section) => (
        <Link to={section.link} key={section.name}>
          <motion.button 
            onClick={() => {
              setActiveSection(section.name.toLowerCase());
              setIsMobileMenuOpen(false);
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center 
              text-white 
              hover:text-indigo-300 
              hover:bg-indigo-600/30 
              px-4 py-2 
              rounded-xl 
              transition-all 
              ease-in-out 
              duration-300 
              ${activeSection === section.name.toLowerCase() ? 'bg-indigo-600/50' : ''}
            `}
          >
            <section.icon className="w-6 h-6 mr-2 transition-transform" />
            <span className="font-medium">{section.name}</span>
          </motion.button>
        </Link>
      ))}
    </div>
  );

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('https://blog.talent500.co/wp-content/uploads/2023/09/f8e15e935890-1134x500.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: backgroundOpacity }}
        transition={{ duration: 1 }}
      />

      {/* Enhanced Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 120 
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-xl shadow-2xl"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo/Name */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-extrabold text-white uppercase tracking-wide"
          >
            Jayash Bhuyar
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween" }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-b from-blue-900 to-purple-900 p-8"
            >
              <div className="flex flex-col space-y-6">
                <NavigationMenu isMobile={true} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Personal Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">
              Hi, I'm Jayash Bhuyar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Innovative Developer | Tech Enthusiast | Problem Solver
            </p>

            {/* Social and Contact Links */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              {[
                { Icon: Github, link: "https://github.com/jayashbhuyar" },
                { Icon: Linkedin, link: "https://linkedin.com/in/jayashbhuyar" }
              ].map(({ Icon, link }) => (
                <motion.a 
                  key={link}
                  href={link} 
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-blue-300"
                >
                  <Icon size={32} />
                </motion.a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { 
                  text: "Resume", 
                  Icon: Download, 
                  href: "https://drive.google.com/drive/folders/1t8tdhkAIVoS_KA8dcfEqacpzttBOEkkM?usp=drive_link", 
                  className: "bg-blue-600 text-white" 
                },
                { 
                  text: "Contact", 
                  Icon: Send, 
                  href: "mailto:jayash.bhuyar@example.com", 
                  className: "bg-green-600 text-white" 
                }
              ].map(({ text, Icon, href, className }) => (
                <motion.a
                  key={text}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-6 py-3 rounded-full flex items-center ${className}`}
                >
                  <Icon className="mr-2" /> {text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img 
              src={backgroundImage} 
              alt="Jayash Bhuyar"
              className="rounded-full w-80 h-80 object-cover border-4 border-blue-500 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Animated Coding GIF Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center my-12"
        >
          <img 
            src="https://camo.githubusercontent.com/ad9ee10f0df299b72a2a56e02e07d3a139908654a793380a69f76b53bc23b9f1/68747470733a2f2f7374617469632e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" 
            alt="Coding Animation"
            className="rounded-lg max-w-2xl w-full shadow-2xl"
          />
        </motion.div>

        {/* Enhanced About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white/20 backdrop-blur-md rounded-lg p-8 mt-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-4 text-white">About Me</h2>
          <p className="text-gray-200">
            A passionate Computer Engineering student at VJTI, Mumbai, driven by innovation and technological excellence. 
            With a strong foundation in full-stack development, data science, and cloud technologies, 
            I'm committed to creating impactful solutions that push the boundaries of what's possible.
          </p>
        </motion.section>

        {/* Skills Showcase */}
        <motion.section 
          className="my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">Professional Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/30 backdrop-blur-md rounded-lg p-6 w-64 text-center"
              >
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{skill.name}</h3>
                <p className="text-gray-200">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          className="my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white/30 backdrop-blur-md rounded-lg p-6 flex items-center space-x-4"
              >
                {achievement.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                  <p className="text-gray-200">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MERN Stack Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center my-12"
        >
          <img 
            src="https://images.javatpoint.com/blog/images/mern-stack.png" 
            alt="MERN Stack"
            className="max-w-md w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 text-white py-6 absolute bottom-0 left-0 right-0">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Jayash Bhuyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;