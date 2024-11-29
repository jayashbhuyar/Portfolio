import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  BarChart2, 
  Cpu, 
  Globe, 
  PenTool, 
  GitBranch,
  Zap,
  Star,
  Home
} from 'lucide-react';
import {Link} from 'react-router-dom';

const SkillCard = ({ icon: Icon, title, description, proficiency, techs, achievements, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const cardVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      rotate: index % 2 === 0 ? -5 : 5
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: index * 0.2
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2980] to-[#26d0ce] p-6 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Effect */}
      <motion.div 
        className="absolute inset-0 bg-white/10 opacity-0"
        animate={{ 
          opacity: isHovered ? 0.2 : 0,
          transition: { duration: 0.3 }
        }}
      />

      <div className="relative z-10 text-white">
        <div className="flex items-center mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 p-3 rounded-full mr-4"
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-3xl font-bold tracking-wide">{title}</h3>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm mb-4 text-white/80">{description}</p>

              {/* Skill Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Skill Level</span>
                  <span>{proficiency}%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${proficiency}%` }}
                  transition={{ duration: 1, type: "tween" }}
                  className="h-2 bg-white/50 rounded-full overflow-hidden"
                >
                  <div 
                    className="h-full bg-white" 
                    style={{ width: '100%' }}
                  />
                </motion.div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {techs.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-white/20 rounded-full text-xs"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-300" />
                  Key Achievements
                </h4>
                <ul className="space-y-1 text-xs">
                  {achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center"
                    >
                      <Zap className="w-3 h-3 mr-2 text-yellow-300" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const SkillsPage = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Crafting dynamic, responsive user interfaces with cutting-edge web technologies.',
      proficiency: 90,
      techs: ['React.js', 'HTML5', 'CSS3', 'Tailwind', 'Next.js'],
      achievements: [
        'Developed multiple responsive web applications',
        'Implemented complex UI/UX designs',
        'Optimized frontend performance'
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust, scalable server-side applications with advanced database integrations.',
      proficiency: 85,
      techs: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
      achievements: [
        'Created RESTful API architectures',
        'Implemented secure authentication systems',
        'Optimized database query performance'
      ]
    },
    {
      icon: BarChart2,
      title: 'Data Analysis',
      description: 'Transforming complex data into actionable business intelligence.',
      proficiency: 80,
      techs: ['Power BI', 'Excel', 'Python', 'Pandas'],
      achievements: [
        '175+ coding challenges solved',
        'Created advanced data visualization dashboards',
        'Derived strategic insights from data'
      ]
    },
    {
      icon: Cpu,
      title: 'Problem Solving',
      description: 'Advanced algorithmic thinking and computational problem-solving.',
      proficiency: 95,
      techs: ['Algorithms', 'Data Structures', 'LeetCode', 'System Design'],
      achievements: [
        '90+ LeetCode questions solved',
        'Top performer in coding competitions',
        'Advanced algorithmic optimization'
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack development expertise with the MERN ecosystem.',
      proficiency: 88,
      techs: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
      achievements: [
        'Developed end-to-end web applications',
        'Integrated complex third-party APIs',
        'Implemented microservices architecture'
      ]
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Expert in collaborative development and code management.',
      proficiency: 85,
      techs: ['Git', 'GitHub', 'CI/CD', 'Collaboration'],
      achievements: [
        'Managed complex team repositories',
        'Implemented efficient branching strategies',
        'Resolved intricate merge conflicts'
      ]
    }
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0f2027] to-[#203a43] flex items-center justify-center p-8"
    >
       <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 bg-blue-600/50 hover:bg-blue-600/70 p-3 rounded-full transition-all"
      >
        <Home className="text-white w-6 h-6" />
      </Link>
      <div className="container mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#26d0ce] to-[#1a2980] mb-16"
        >
          Skill Constellation
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              {...skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;