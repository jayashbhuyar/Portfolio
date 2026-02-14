import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import {
  ExternalLink,
  Code,
  Server,
  Database,
  ChartBar,
  Cpu,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Retail-Pro',
    description:
      'Full-stack web app connecting retailers and distributors with product catalogs, order management, and admin interface.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image: 'https://res.cloudinary.com/dlx3l4a9p/image/upload/v1730382942/wjyihm0hyh0ctnkow2m0.png',
    githubLink: 'https://github.com/jayashbhuyar/Retail-Connect',
    demoLink: 'https://retail-connect-final.vercel.app/',
  },
  {
    title: 'Vehicle Sales Dashboard',
    description:
      'Power BI dashboard visualizing vehicle sales trends to help businesses track performance and growth.',
    technologies: ['Power BI', 'Data Analysis', 'Business Intelligence'],
    image: 'https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png',
    githubLink: 'https://github.com/jayashbhuyar/Vehicle-Sales-Dashboard',
  },
  {
    title: 'Student Analysis Dashboard',
    description:
      'Power BI dashboard for analyzing student performance metrics to support educational decision-making.',
    technologies: ['Power BI', 'Educational Analytics'],
    image: 'https://media.datacamp.com/legacy/v1724169856/image_ff55d03003.png',
    githubLink: 'https://github.com/jayashbhuyar/Student-Data-Analysis-Dashboard',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'Power BI dashboard for tracking sales and inventory for e-commerce performance monitoring.',
    technologies: ['Power BI', 'Business Intelligence'],
    image: 'https://cdn.dribbble.com/users/970957/screenshots/5504725/gif.gif',
    githubLink: 'https://github.com/jayashbhuyar/E-commerce-Dashboard',
  },
  {
    title: 'Technovanza Housecup',
    description:
      'Leadership in Technovanza committee, leading multiple teams and contributing to winning the housecup.',
    technologies: ['Leadership', 'Team Management'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wssZ51XsWGUTJhFi5wbbDtE3mI5UGqfCGA&s',
  },
  {
    title: 'Data Structures & Algorithms',
    description:
      'Coding practice: 175+ problems on GeeksforGeeks and 100+ on LeetCode.',
    technologies: ['Algorithms', 'Problem Solving'],
    image: 'https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg',
    demoLink: 'https://www.geeksforgeeks.org/user/bhuyarjj7ul/',
    demoLabel: 'GeeksforGeeks',
    demoLink2: 'https://leetcode.com/u/bhuyarjayash/',
    demoLabel2: 'LeetCode',
  },
  {
    title: 'ESP32 IoT Project',
    description:
      'IoT solution using ESP32 microcontroller with MongoDB for sensor data storage and retrieval.',
    technologies: ['IoT', 'ESP32', 'MongoDB'],
    image: 'https://disrupt-x.io/wp-content/uploads/2023/10/Planet-GIF-11-min.gif',
    githubLink: 'https://github.com/jayashbhuyar/Home_Automation',
  },
];

const getTechIcon = (tech) => {
  const iconMap = {
    React: <Code className="w-4 h-4 text-cyan-400 shrink-0" />,
    'Node.js': <Server className="w-4 h-4 text-green-400 shrink-0" />,
    MongoDB: <Database className="w-4 h-4 text-green-500 shrink-0" />,
    'Power BI': <ChartBar className="w-4 h-4 text-amber-400 shrink-0" />,
    IoT: <Cpu className="w-4 h-4 text-purple-400 shrink-0" />,
    Leadership: <Trophy className="w-4 h-4 text-accent-blue shrink-0" />,
  };
  return iconMap[tech] ?? null;
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl overflow-hidden card-premium transition-all duration-300 min-w-0 ${
        isHovered ? '!border-accent-blue/40' : ''
      }`}
    >
      <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-navy-card">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://placehold.co/600x280/1e293b/475569?text=Project';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/90 to-transparent" />
      </div>

      <div className="p-4 sm:p-5 min-w-0">
        <h3 className="text-base sm:text-lg font-display font-semibold text-white mb-1.5 sm:mb-2 break-words">{project.title}</h3>
        <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 bg-white/10 text-white/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-xs"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium transition-colors min-h-[40px] sm:min-h-[44px] items-center"
            >
              <SiGithub className="w-4 h-4 shrink-0" /> GitHub
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-accent-500/20 hover:bg-accent-500/30 text-accent-300 text-xs sm:text-sm font-medium transition-all duration-200 min-h-[40px] sm:min-h-[44px] items-center"
            >
              <ExternalLink className="w-4 h-4 shrink-0" /> {project.demoLabel || 'Live Demo'}
            </a>
          )}
          {project.demoLink2 && (
            <a
              href={project.demoLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-accent-500/20 hover:bg-accent-500/30 text-accent-300 text-xs sm:text-sm font-medium transition-all duration-200 min-h-[40px] sm:min-h-[44px] items-center"
            >
              <ExternalLink className="w-4 h-4 shrink-0" /> {project.demoLabel2 || 'Link'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="min-h-screen bg-navy-primary font-sans text-[#F8FAFC] overflow-x-hidden">
      <div className="fixed inset-0 bg-navy-primary pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(79,70,229,0.12), transparent 50%)' }} />

      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-20 relative z-10 max-w-6xl w-full min-w-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-white mb-3 sm:mb-4"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 mb-8 sm:mb-12 text-sm"
        >
          A selection of my work across full-stack, data, and IoT.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <footer className="border-t border-white/5 bg-navy-section py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center min-w-0">
          <p className="text-[#64748B] text-xs sm:text-sm">© {new Date().getFullYear()} Jayash Bhuyar.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectShowcase;
