import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  BarChart2,
  Cpu,
  Globe,
  GitBranch,
  Cloud,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    techs: ['React.js', 'HTML5', 'CSS3', 'Tailwind', 'Next.js'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    techs: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
  },
  {
    icon: BarChart2,
    title: 'Data Analysis',
    techs: ['Power BI', 'Excel', 'Python', 'Pandas'],
  },
  {
    icon: Cpu,
    title: 'Problem Solving',
    techs: ['Algorithms', 'Data Structures', 'LeetCode', 'System Design'],
  },
  {
    icon: Globe,
    title: 'Full-Stack (MERN)',
    techs: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    techs: ['Git', 'GitHub', 'CI/CD'],
  },
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    techs: ['AWS', 'EC2', 'S3', 'Lambda', 'IAM'],
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-navy-secondary font-sans text-[#F8FAFC] overflow-x-hidden">
      <div className="fixed inset-0 bg-navy-secondary pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(79,70,229,0.12), transparent 50%)' }} />

      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-20 relative z-10 max-w-5xl w-full min-w-0">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-white mb-2"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-center text-white/60 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base"
        >
          Technologies and tools I work with
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="card-premium p-4 sm:p-5 min-w-0"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4 min-w-0">
                  <div className="p-2 rounded-xl bg-accent-500/20 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white truncate">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded-lg text-xs sm:text-sm text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
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

export default SkillsPage;
