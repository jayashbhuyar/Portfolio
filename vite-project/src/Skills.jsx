import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  BarChart2, 
  Cpu, 
  Globe, 
  PenTool, 
  GitBranch,
  Zap,
  Star
} from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description, proficiency, techs, achievements }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative bg-white/15 backdrop-blur-xl border border-blue-200/20 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-lg"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500/20 p-3 rounded-full mr-4">
            <Icon className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="relative overflow-hidden">
          <div className={`transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <p className="text-gray-300 mb-4 text-sm">{description}</p>
            
            {/* Proficiency Bar */}
            <div className="flex items-center mb-3">
              <div className="w-full bg-gray-700 rounded-full h-3 mr-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                  style={{width: `${proficiency}%`}}
                ></div>
              </div>
              <span className="text-sm text-gray-400 font-semibold">{proficiency}%</span>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {techs.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Achievements */}
            {achievements && (
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Achievements
                </h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <Zap className="w-3 h-3 mr-2 text-yellow-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'Creating intuitive, visually stunning user experiences.',
      proficiency: 75,
      techs: ['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing'],
      achievements: [
        'Designed user-centric interfaces',
        'Created design systems',
        'Implemented accessibility best practices'
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
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif")',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay to ensure better readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="absolute top-4 right-4 z-20">
          <a 
            href="/" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
          >
            Home
          </a>
        </nav>
        
        {/* Title */}
        <h1 className={`text-4xl md:text-6xl font-bold text-center text-white mb-12 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Jayash Bhuyar's Skills Spectrum
        </h1>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-1000 delay-${index * 100} ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <SkillCard 
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                proficiency={skill.proficiency}
                techs={skill.techs}
                achievements={skill.achievements}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;