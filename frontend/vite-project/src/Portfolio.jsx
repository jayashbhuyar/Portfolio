import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import {
  ExternalLink,
  Send,
  Monitor,
  Server,
  BarChart2,
  Award,
  Briefcase,
  Cloud,
  Phone,
  Mail,
  X,
} from 'lucide-react';
import FloatingTechLogos, { TechStripMobile } from './components/FloatingTechLogos';

const profileImage = 'https://res.cloudinary.com/dlx3l4a9p/image/upload/v1771053452/ctz4ulctmmkvu2llk2q8.jpg';
const CONTACT_PHONE = '7666599835';
const CONTACT_EMAIL = 'jayashbhuyar@gmail.com';

const CreativePortfolio = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const skills = [
    { name: "Frontend Development", icon: <Monitor className="w-10 h-10 text-accent-blue" />, description: "React, Tailwind, responsive UI" },
    { name: "Backend Development", icon: <Server className="w-10 h-10 text-accent-blue" />, description: "Node.js, Express, APIs" },
    { name: "Data Analysis", icon: <BarChart2 className="w-10 h-10 text-accent-blue" />, description: "Power BI, insights & dashboards" },
    { name: "Cloud & AWS", icon: <Cloud className="w-10 h-10 text-accent-blue" />, description: "EC2, S3, Lambda, AWS services" },
  ];

  const experience = [{ role: "SDE Intern", company: "Robin AI" }];

  const achievements = [
    { title: "Won Housecup 2022", description: "Led team to victory in Technovanza housecup, demonstrating leadership and teamwork.", icon: <Award className="w-8 h-8 text-amber-400 shrink-0" /> },
    { title: "Completed 100+ LeetCode Questions", description: "Solved over 100+ problems, improving problem-solving and algorithmic skills.", icon: <Award className="w-8 h-8 text-amber-400 shrink-0" /> },
    { title: "Team Leadership in Technovanza", description: "Led multiple teams in various events at Technovanza, showcasing leadership and project management.", icon: <Award className="w-8 h-8 text-amber-400 shrink-0" /> },
    { title: "Volunteer Work in Community Projects", description: "Contributed to various community projects, demonstrating a commitment to social causes.", icon: <Award className="w-8 h-8 text-amber-400 shrink-0" /> },
  ];

  const socialLinks = [
    { Icon: SiGithub, link: "https://github.com/jayashbhuyar", label: "GitHub" },
    { Icon: SiLinkedin, link: "https://linkedin.com/in/jayashbhuyar", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-navy-primary font-sans text-[#F8FAFC] overflow-x-hidden">
      {/* Hero background: navy + radial glow top right */}
      <div className="fixed inset-0 bg-navy-primary pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(79,70,229,0.2), transparent 60%)' }} />

      {/* Contact modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={() => setIsContactOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="relative w-full max-w-md card-premium overflow-hidden my-auto min-w-0 mx-2" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-bold text-[#F8FAFC]">Contact</h2>
                  <button type="button" onClick={() => setIsContactOpen(false)} className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-colors duration-smooth" aria-label="Close">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  <a href={`tel:+91${CONTACT_PHONE}`} className="flex items-center gap-3 text-[#CBD5E1] hover:text-accent-blue transition-colors duration-smooth">
                    <Phone className="w-5 h-5 text-accent-blue shrink-0" />
                    <span>+91 {CONTACT_PHONE.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-[#CBD5E1] hover:text-accent-blue transition-colors duration-smooth">
                    <Mail className="w-5 h-5 text-accent-blue shrink-0" />
                    <span className="break-all">{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero – #0F172A */}
        <section className="min-h-[80vh] sm:min-h-[85vh] flex items-center pt-6 sm:pt-8 pb-12 sm:pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl w-full min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left min-w-0">
                <p className="text-[#64748B] font-medium mb-2 text-xs sm:text-sm uppercase tracking-wider">Hello, I'm</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] mb-3 sm:mb-4 break-words">
                  Jayash <span className="text-gradient-accent">Bhuyar</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] mb-2 max-w-md mx-auto md:mx-0">
                  Full-Stack Developer · AWS Cloud · Problem Solver
                </p>
                <p className="text-accent-blue font-medium mb-6 sm:mb-8 flex items-center gap-2 flex-wrap justify-center md:justify-start text-sm sm:text-base">
                  <Briefcase className="w-5 h-5 shrink-0" />
                  {experience.map((e) => <span key={e.company}>{e.role} @ {e.company}</span>)}
                </p>
                <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {socialLinks.map(({ Icon, link, label }) => (
                    <motion.a key={link} href={link} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#CBD5E1] hover:text-accent-blue border border-white/5 transition-all duration-smooth" >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                  <motion.a href="https://drive.google.com/file/d/1INB7OoxPfbcJlQ9wh-eTu_wkydvMv5CC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 font-medium text-sm sm:text-base min-h-[44px]">
                    <ExternalLink className="w-5 h-5 shrink-0" /> View Resume
                  </motion.a>
                  <motion.button type="button" onClick={() => setIsContactOpen(true)} className="btn-secondary inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 font-medium text-sm sm:text-base min-h-[44px]">
                    <Send className="w-5 h-5 shrink-0" /> Contact
                  </motion.button>
                </div>
                <TechStripMobile className="mt-6 sm:mt-8" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center md:justify-end order-first md:order-none">
                <div className="relative w-[200px] sm:w-[260px] md:w-[320px] md:translate-x-2 shrink-0">
                  <div className="absolute -inset-4 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)', filter: 'blur(24px)' }} />
                  <img src={profileImage} alt="Jayash Bhuyar" className="relative w-full aspect-square max-w-[280px] mx-auto object-cover rounded-full border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]" style={{ objectPosition: '50% 38%' }} />
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="hidden md:block mt-8 sm:mt-10 md:mt-12 overflow-x-hidden">
              <FloatingTechLogos />
            </motion.div>
          </div>
        </section>

        {/* About snippet – #111827 */}
        <section className="pt-2 pb-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-navy-secondary">
          <div className="container mx-auto max-w-6xl w-full min-w-0">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="card-premium p-5 sm:p-6 md:p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">About <span className="text-gradient-accent">Me</span></h2>
              <p className="text-[#CBD5E1] leading-relaxed mb-4">
                Computer Engineering student at VJTI, Mumbai, with a strong foundation in full-stack development, data science, and cloud technologies. I build impactful solutions and love pushing the boundaries of what's possible.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 mt-2 text-accent-blue hover:text-accent-soft font-medium transition-colors duration-smooth">
                Read more <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills – #0F172A */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-navy-primary">
          <div className="container mx-auto max-w-6xl w-full min-w-0">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl sm:text-2xl font-bold text-[#F8FAFC] text-center mb-3 sm:mb-4">Professional <span className="text-gradient-accent">Skills</span></motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center text-[#94A3B8] mb-8 sm:mb-10 text-xs sm:text-sm">Technologies and tools I work with</motion.p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="card-premium p-5 sm:p-6 w-full max-w-[280px] sm:w-64 min-w-0">
                  <div className="flex justify-center mb-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1 text-center">{skill.name}</h3>
                  <p className="text-sm text-[#94A3B8] text-center">{skill.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/skills" className="text-accent-blue hover:text-accent-soft font-medium transition-colors duration-smooth">View all skills →</Link>
            </div>
          </div>
        </section>

        {/* Achievements – #111827 */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-navy-secondary">
          <div className="container mx-auto max-w-6xl w-full min-w-0">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl sm:text-2xl font-bold text-[#F8FAFC] text-center mb-6 sm:mb-10"><span className="text-gradient-accent">Achievements</span></motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
              {achievements.map((achievement) => (
                <motion.div key={achievement.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="card-premium p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0">
                  {achievement.icon}
                  <div>
                    <h3 className="font-semibold text-[#F8FAFC] mb-1">{achievement.title}</h3>
                    <p className="text-sm text-[#94A3B8]">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA – #0F172A */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-navy-primary">
          <div className="container mx-auto max-w-6xl text-center w-full min-w-0">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-medium">
                <Briefcase className="w-5 h-5" /> View My Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer – #0B1220 */}
      <footer className="border-t border-white/5 bg-navy-section py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center min-w-0">
          <p className="text-[#64748B] text-xs sm:text-sm px-2">© {new Date().getFullYear()} Jayash Bhuyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;
