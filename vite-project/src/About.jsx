import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  ChartBar, 
  Code, 
  Database, 
  Award,
  Home 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    { 
      name: 'Web Development', 
      icon: <Code className="text-blue-500 w-12 h-12" />,
      technologies: ['React', 'Node.js', 'Tailwind CSS']
    },
    { 
      name: 'Data Analytics', 
      icon: <ChartBar className="text-green-500 w-12 h-12" />,
      technologies: ['Power BI', 'Data Visualization', 'MongoDB']
    },
    { 
      name: 'Cloud & Backend', 
      icon: <Database className="text-purple-500 w-12 h-12" />,
      technologies: ['Firebase', 'Express.js', 'Cloud Computing']
    }
  ];

  const aboutMeContent = `
    As a passionate B-Tech 3rd Year Computer Engineering student at Veermata Jijabai Technological Institute (VJTI), Mumbai, 
    I'm driven by an insatiable curiosity for technology and a commitment to creating innovative solutions. 
    My journey in tech is fueled by a deep love for coding and a relentless desire to transform complex challenges 
    into elegant, user-centric applications.

    My technical arsenal spans the MERN stack, with a particular passion for crafting responsive web experiences 
    using React and creating robust backend architectures with Node.js and MongoDB. I'm equally passionate about 
    data analytics, leveraging tools like Power BI to transform raw data into meaningful insights.

    Beyond the code, I thrive on continuous learning and exploring emerging technologies. Whether it's 
    developing full-stack platforms, designing IoT solutions, or diving into data visualization projects, 
    I approach each challenge with creativity and strategic thinking.
  `;

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('https://i.gifer.com/J4o.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Home Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 bg-blue-600/50 hover:bg-blue-600/70 p-3 rounded-full transition-all"
      >
        <Home className="text-white w-6 h-6" />
      </Link>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        {/* About Me Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-10 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 flex items-center justify-center">
            <Zap className="mr-4 text-yellow-400" /> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-200 text-base md:text-lg">
              {aboutMeContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">My Tech Toolkit</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-black/40 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      {skill.icon}
                      <span className="ml-3 text-base md:text-xl font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect!</h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Interested in collaboration, discussing tech, or exploring innovative projects? 
              I'm always open to connecting with fellow developers, tech enthusiasts, and potential mentors.
            </p>
            <motion.a
              href="mailto:jayash.bhuyar@example.com"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full inline-flex items-center text-sm md:text-base"
            >
              <Zap className="mr-2" /> Get in Touch
            </motion.a>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 flex items-center justify-center">
            <Award className="mr-4 text-yellow-400" /> Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-6 rounded-lg">
              <Target className="text-green-400 w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Coding Proficiency</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Solved 175+ problems on GeeksforGeeks and 100+ problems on LeetCode, demonstrating strong algorithmic skills.
              </p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-lg">
              <ChartBar className="text-blue-400 w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Tech Competitions</h3>
              <p className="text-gray-300 text-sm md:text-base">
                2-Time House Cup Winner at Technovanza (2023 and 2024), with notable achievements at Taluka and District Level Science Exhibitions.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">&copy; 2024 Jayash Bhuyar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;