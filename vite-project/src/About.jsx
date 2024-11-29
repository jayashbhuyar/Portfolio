import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  ChartBar, 
  Code, 
  Database, 
  Award,
  Home,
  GraduationCap,
  MapPin
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

  const educationHistory = [
    {
      level: '10th',
      school: 'Late Rajiv Gandhi Memorial English High School and Jr. College',
      location: 'Karanja (Gh.)',
      percentage: '88.80%',
      image: 'school-img-placeholder.jpg'
    },
    {
      level: '12th',
      school: 'Tirupati International Public School',
      location: 'Katol',
      percentage: '80.17%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQvFvK67jfXq6JcQQ6RqghzCw1ih4uwDw1A&s'
    },
    {
      level: 'Engineering',
      school: 'Veermata Jijabai Technological Institute (VJTI)',
      location: 'Mumbai',
      year: '3rd Year',
      image: 'https://www.festivalsfromindia.com/wp-content/uploads/2022/04/VJTI-Mumbai.-Photo-VJTI-Mumbai-1_11zon.jpg'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

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
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Home Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 bg-blue-600/50 hover:bg-blue-600/70 p-3 rounded-full transition-all"
      >
        <Home className="text-white w-6 h-6" />
      </Link>

      <motion.div 
        className="container mx-auto px-4 pt-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Me Section */}
        <motion.section 
          variants={itemVariants}
          className="bg-white/30 backdrop-blur-lg rounded-xl p-6 md:p-10 mb-16 border border-white/40 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 flex items-center justify-center">
            <Zap className="mr-4 text-indigo-600" /> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-indigo-900 text-base md:text-lg">
              {aboutMeContent.split('\n\n').map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="mb-4 text-black text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-900 mb-6">My Tech Toolkit</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="bg-white/50 p-4 rounded-lg border border-white/60 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-2">
                      {skill.icon}
                      <span className="ml-3 text-base md:text-xl font-medium text-indigo-900">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-indigo-500/20 text-indigo-900 px-2 py-1 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Let's Connect!</h3>
            <p className="text-indigo-800 mb-6 text-sm md:text-base">
              Interested in collaboration, discussing tech, or exploring innovative projects? 
              I'm always open to connecting with fellow developers, tech enthusiasts, and potential mentors.
            </p>
            <motion.a
              href="mailto:jayashbhuyar@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-indigo-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full inline-flex items-center text-sm md:text-base"
            >
              <Zap className="mr-2" /> Get in Touch
            </motion.a>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          variants={itemVariants}
          className="bg-white/30 backdrop-blur-lg rounded-xl p-6 md:p-10 mb-16 border border-white/40 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 flex items-center justify-center">
            <GraduationCap className="mr-4 text-indigo-600" /> Educational Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {educationHistory.map((edu, index) => (
              <motion.div 
                key={edu.level} 
                className="bg-white/50 p-6 rounded-lg text-center border border-white/60 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4 flex justify-center">
                  <img 
                    src={edu.image} 
                    alt={edu.school} 
                    className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-900 mb-2">{edu.level}</h3>
                <p className="text-indigo-800 text-sm md:text-base mb-2">{edu.school}</p>
                <div className="flex items-center justify-center text-indigo-700 text-xs md:text-sm">
                  <MapPin className="mr-2 w-4 h-4" />
                  {edu.location}
                </div>
                <div className="mt-2 text-indigo-900 font-medium">
                  {edu.percentage ? `${edu.percentage} Percentage` : edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          variants={itemVariants}
          className="bg-white/30 backdrop-blur-lg rounded-xl p-6 md:p-10 border border-white/40 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 flex items-center justify-center">
            <Award className="mr-4 text-indigo-600" /> Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white/50 p-6 rounded-lg border border-white/60 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="text-green-600 w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-indigo-900 mb-2">Coding Proficiency</h3>
              <p className="text-indigo-800 text-sm md:text-base">
                Solved 175+ problems on GeeksforGeeks and 100+ problems on LeetCode, demonstrating strong algorithmic skills.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 p-6 rounded-lg border border-white/60 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ChartBar className="text-blue-600 w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-indigo-900 mb-2">Tech Competitions</h3>
              <p className="text-indigo-800 text-sm md:text-base">
                2-Time House Cup Winner at Technovanza (2023 and 2024), with notable achievements at Taluka and District Level Science Exhibitions.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="bg-white/20 text-indigo-900 py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">&copy; 2024 Jayash Bhuyar. All Rights Reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default AboutPage;