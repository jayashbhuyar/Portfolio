import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Server, 
  Database, 
  ChartBar, 
  Cpu, 
  Trophy ,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Retail-Pro",
    description:
      "A full-stack web application connecting retailers and distributors with product catalogs, order management, and admin interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    image:
      "https://res.cloudinary.com/dlx3l4a9p/image/upload/v1730382942/wjyihm0hyh0ctnkow2m0.png",
    githubLink: "https://github.com/jayashbhuyar/Retail-Connect",
    demoLink: "https://retail-connect-final.vercel.app/",
  },
  {
    title: "Vehicle Sales Dashboard",
    description:
      "Power BI dashboard visualizing vehicle sales trends to help businesses track performance and growth opportunities.",
    technologies: ["Power BI", "Data Analysis", "Business Intelligence"],
    image:
      "https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png",
    githubLink: "https://github.com/jayashbhuyar/Vehicle-Sales-Dashboard",
  },
  {
    title: "Student Analysis Dashboard",
    description:
      "Power BI dashboard for analyzing student performance metrics to support educational institutions' decision-making.",
    technologies: ["Power BI", "Educational Analytics"],
    image: "https://media.datacamp.com/legacy/v1724169856/image_ff55d03003.png",
    githubLink:
      "https://github.com/jayashbhuyar/Student-Data-Analysis-Dashboard",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Power BI dashboard for tracking business metrics like sales and inventory for e-commerce performance monitoring.",
    technologies: ["Power BI", "Business Intelligence"],
    image: "https://cdn.dribbble.com/users/970957/screenshots/5504725/gif.gif",
    githubLink: "https://github.com/jayashbhuyar/E-commerce-Dashboard",
  },
  {
    title: "Technovanza Housecup",
    description:
      "Leadership project in Technovanza committee, leading multiple teams and contributing to winning the housecup.",
    technologies: ["Leadership", "Team Management"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wssZ51XsWGUTJhFi5wbbDtE3mI5UGqfCGA&s",
    // demoLink: "#"
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Ongoing coding challenges improving skills with 175+ problems solved on GeeksforGeeks and 90+ on LeetCode.",
    technologies: ["Algorithms", "Problem Solving"],
    image: "https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg",
    demoLink: "https://www.geeksforgeeks.org/user/bhuyarjj7ul/",
  //  demoLink: "https://leetcode.com/u/bhuyarjayash/"
  },
  {
    title: "ESP32 IoT Project",
    description:
      "IoT solution using ESP32 microcontroller, integrating MongoDB for sensor data storage and retrieval.",
    technologies: ["IoT", "ESP32", "MongoDB"],
    image:
      "https://disrupt-x.io/wp-content/uploads/2023/10/Planet-GIF-11-min.gif",
    githubLink: "https://github.com/jayashbhuyar/Home_Automation",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': <Code className="w-5 h-5 text-cyan-400" />,
      'Node.js': <Server className="w-5 h-5 text-green-400" />,
      'MongoDB': <Database className="w-5 h-5 text-green-500" />,
      'Power BI': <ChartBar className="w-5 h-5 text-yellow-400" />,
      'IoT': <Cpu className="w-5 h-5 text-purple-400" />,
      'Leadership': <Trophy className="w-5 h-5 text-blue-400" />
    };
    return iconMap[tech] || null;
  };

  return (
    <div 
    
      className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden 
        transform transition-all duration-300 
        ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}
        hover:border-blue-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 
            hover:scale-110 hover:brightness-75"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x250.png?text=Project+Image';
            e.target.classList.add('opacity-50');
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-100 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-3 text-sm h-16 overflow-hidden">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="flex items-center gap-1 bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
         <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 bg-blue-600/50 hover:bg-blue-600/70 p-3 rounded-full transition-all"
      >
        <Home className="text-white w-6 h-6" />
      </Link>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-100">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;