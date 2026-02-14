import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ChartBar,
  Code,
  Database,
  Award,
  GraduationCap,
  MapPin,
  Target,
  Cloud,
  Briefcase,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    {
      name: 'Web Development',
      icon: <Code className="text-accent-blue w-10 h-10 shrink-0" />,
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
    },
    {
      name: 'Data Analytics',
      icon: <ChartBar className="text-accent-blue w-10 h-10 shrink-0" />,
      technologies: ['Power BI', 'Data Visualization', 'MongoDB'],
    },
    {
      name: 'Cloud & Backend',
      icon: <Database className="text-accent-blue w-10 h-10 shrink-0" />,
      technologies: ['Firebase', 'Express.js', 'Cloud Computing'],
    },
    {
      name: 'Cloud & AWS',
      icon: <Cloud className="text-accent-blue w-10 h-10 shrink-0" />,
      technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'IAM'],
    },
  ];

  const experience = [
    {
      role: 'SDE Intern',
      company: 'Robin AI',
      description: 'Software development engineering internship, contributing to real-world products and engineering workflows.',
    },
  ];

  const educationHistory = [
    {
      level: '10th',
      school: 'Late Rajiv Gandhi Memorial English High School and Jr. College',
      location: 'Karanja (Gh.)',
      percentage: '88.80%',
      image: 'https://placehold.co/128x128/1e293b/64748b?text=10th',
    },
    {
      level: '12th',
      school: 'Tirupati International Public School',
      location: 'Katol',
      percentage: '80.17%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQvFvK67jfXq6JcQQ6RqghzCw1ih4uwDw1A&s',
    },
    {
      level: 'Engineering',
      school: 'Veermata Jijabai Technological Institute (VJTI)',
      location: 'Mumbai',
      year: 'Final Year (Computer Engineering)',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/VJTI_College_Quadrangle.jpg',
    },
  ];

  const aboutMeContent = `As a passionate B-Tech 3rd Year Computer Engineering student at Veermata Jijabai Technological Institute (VJTI), Mumbai, I'm driven by an insatiable curiosity for technology and a commitment to creating innovative solutions. My journey in tech is fueled by a deep love for coding and a relentless desire to transform complex challenges into elegant, user-centric applications.

My technical arsenal spans the MERN stack, with a particular passion for crafting responsive web experiences using React and creating robust backend architectures with Node.js and MongoDB. I'm equally passionate about data analytics, leveraging tools like Power BI to transform raw data into meaningful insights.

Beyond the code, I thrive on continuous learning and exploring emerging technologies. Whether it's developing full-stack platforms, designing IoT solutions, or diving into data visualization projects, I approach each challenge with creativity and strategic thinking.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-navy-secondary font-sans text-[#F8FAFC]">
      <div className="fixed inset-0 bg-navy-secondary pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(79,70,229,0.12), transparent 50%)' }} />

      <motion.div
        className="container mx-auto px-4 pt-8 pb-20 relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={itemVariants}
          className="card-premium p-6 md:p-10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#F8FAFC] mb-6 flex items-center gap-3">
            <Zap className="text-accent-blue" /> About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {aboutMeContent.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-[#CBD5E1] leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-display font-semibold text-[#F8FAFC] mb-4">My Tech Toolkit</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="rounded-xl p-4 bg-navy-card/80 border border-white/5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {skill.icon}
                      <span className="font-medium text-[#F8FAFC]">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-accent-indigo/20 text-accent-blue px-2.5 py-1 rounded-lg text-sm"
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

          <div className="mt-10 text-center">
            <h3 className="text-xl font-display font-semibold text-[#F8FAFC] mb-2">Let's Connect</h3>
            <p className="text-[#94A3B8] mb-4 text-sm max-w-xl mx-auto">
              Interested in collaboration, discussing tech, or exploring projects? I'm open to connecting with developers and mentors.
            </p>
            <motion.a
              href="mailto:jayashbhuyar@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-medium"
            >
              <Zap className="w-5 h-5" /> Get in Touch
            </motion.a>
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="card-premium p-6 md:p-10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#F8FAFC] mb-8 flex items-center gap-3">
            <Briefcase className="text-accent-blue" /> Experience
          </h2>

          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="card-premium rounded-xl p-6"
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">{exp.role}</h3>
                  <span className="text-accent-blue font-medium">@ {exp.company}</span>
                </div>
                <p className="text-[#94A3B8] text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="card-premium p-6 md:p-10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#F8FAFC] mb-8 flex items-center gap-3">
            <GraduationCap className="text-accent-blue" /> Educational Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {educationHistory.map((edu) => (
              <motion.div
                key={edu.level}
                variants={itemVariants}
                className="card-premium rounded-2xl p-6 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-24 h-24 object-cover rounded-full border-2 border-white/20"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/96x96/1e293b/64748b?text=School';
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">{edu.level}</h3>
                <p className="text-[#CBD5E1] text-sm mb-2">{edu.school}</p>
                <div className="flex items-center justify-center gap-1 text-[#94A3B8] text-xs">
                  <MapPin className="w-4 h-4 shrink-0" /> {edu.location}
                </div>
                <div className="mt-2 text-accent-blue font-medium text-sm">
                  {edu.percentage ? `${edu.percentage}` : edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="card-premium p-6 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#F8FAFC] mb-8 flex items-center gap-3">
            <Award className="text-accent-blue" /> Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="card-premium rounded-xl p-6"
            >
              <Target className="text-accent-blue w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">Coding Proficiency</h3>
              <p className="text-[#94A3B8] text-sm">
                Solved 175+ problems on GeeksforGeeks and 100+ on LeetCode, demonstrating strong algorithmic skills.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-premium rounded-xl p-6"
            >
              <ChartBar className="text-accent-blue w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">Tech Competitions</h3>
              <p className="text-[#94A3B8] text-sm">
                2-Time House Cup Winner at Technovanza (2023 and 2024), with notable achievements at Taluka and District Level Science Exhibitions.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      <footer className="border-t border-white/5 bg-navy-section py-6">
        <div className="container mx-auto text-center">
          <p className="text-[#94A3B8] text-sm">© {new Date().getFullYear()} Jayash Bhuyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
