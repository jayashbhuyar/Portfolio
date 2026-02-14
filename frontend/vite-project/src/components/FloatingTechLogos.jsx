import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiClickup,
  SiGooglegemini,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';

const LOGO_SIZE = 32;
// Order: languages → frontend → backend → databases → cloud → tools → productivity
const techLogos = [
  { Icon: SiCplusplus, label: 'C++', delay: 0.2, opacity: 0.9, color: '#00599C' },
  { Icon: SiPython, label: 'Python', delay: 0.1, opacity: 0.9, color: '#3776AB' },
  { Icon: SiJavascript, label: 'JavaScript', delay: 0, opacity: 1, color: '#F7DF1E' },
  { Icon: SiReact, label: 'React', delay: 0.3, opacity: 1, color: '#61DAFB' },
  { Icon: SiTailwindcss, label: 'Tailwind', delay: 0.4, opacity: 0.9, color: '#06B6D4' },
  { Icon: SiNodedotjs, label: 'Node.js', delay: 0.5, opacity: 0.9, color: '#339933' },
  { Icon: SiExpress, label: 'Express', delay: 0.6, opacity: 0.85, color: '#C8C8C8' },
  { Icon: SiFastapi, label: 'FastAPI', delay: 0.7, opacity: 0.85, color: '#009688' },
  { Icon: SiMongodb, label: 'MongoDB', delay: 0.15, opacity: 0.9, color: '#47A248' },
  { Icon: SiPostgresql, label: 'PostgreSQL', delay: 0.25, opacity: 0.9, color: '#336791' },
  { Icon: DiRedis, label: 'Redis', delay: 0.35, opacity: 0.9, color: '#DC382D' },
  { Icon: SiAmazonwebservices, label: 'AWS', delay: 0.45, opacity: 0.85, color: '#FF9900' },
  { Icon: SiGooglegemini, label: 'Google Agent Development Kit', delay: 0.6, opacity: 0.85, color: '#8E75B2', logoUrl: 'https://pypi-camo.freetls.fastly.net/371f959cc03f1fa2e31282c2b85eb4f9e1a1b6cc/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676f6f676c652f61646b2d707974686f6e2f6d61696e2f6173736574732f6167656e742d646576656c6f706d656e742d6b69742e706e67' },
  { Icon: SiDocker, label: 'Docker', delay: 0.8, opacity: 0.8, color: '#2496ED' },
  { Icon: SiClickup, label: 'ClickUp', delay: 0.9, opacity: 0.85, color: '#7B68EE' },

];

const BLINK_INTERVAL_MS = 450;

export default function FloatingTechLogos({ className = '' }) {
  const [hovered, setHovered] = useState(null);
  const [blinkIndex, setBlinkIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBlinkIndex((i) => (i + 1) % techLogos.length);
    }, BLINK_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-5 overflow-hidden max-w-full min-w-0 pb-10 ${className}`} aria-hidden>
      {techLogos.map(({ Icon, label, delay, opacity, color, logoUrl }, index) => {
        const isBlinking = index === blinkIndex;
        return (
          <motion.div
            key={label}
            className="relative flex items-center justify-center rounded-xl pointer-events-auto tech-logo-float flex-shrink-0 overflow-visible"
            style={{
              width: 52,
              height: 52,
              background: 'rgba(30, 41, 59, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              opacity,
            }}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, 4, 0],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4 + delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.15,
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            title={label}
          >
            {hovered === label && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-lg bg-[#1E293B] border border-white/10 text-xs font-medium text-[#F8FAFC] whitespace-nowrap shadow-lg z-[100] pointer-events-none">
                {label}
              </span>
            )}
            <motion.span
              className="block transition-colors duration-200 flex items-center justify-center"
              style={{ color: logoUrl ? undefined : color }}
              animate={{
                scale: hovered === label ? 1.1 : isBlinking ? 1.12 : 1,
                filter: hovered === label ? 'brightness(1.2)' : isBlinking ? 'brightness(1.4)' : 'brightness(1)',
              }}
              transition={{ duration: 0.2 }}
            >
              {logoUrl ? (
                <img src={logoUrl} alt={label} width={LOGO_SIZE} height={LOGO_SIZE} className="object-contain" />
              ) : (
                <Icon size={LOGO_SIZE} />
              )}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}

function TechLogoItem({ Icon, label, color, logoUrl, isBlinking, isHovered, onHover, onTap, showLabelBelow }) {
  return (
    <motion.div
      className="relative flex-shrink-0 flex items-center justify-center rounded-xl w-14 h-14 overflow-visible"
      style={{
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        touchAction: 'none',
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onTap?.(label);
      }}
      title={label}
    >
      {isHovered && (
        <span
          className={`absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#1E293B] border border-white/10 text-xs font-medium text-[#F8FAFC] whitespace-nowrap shadow-lg z-[100] pointer-events-none ${
            showLabelBelow ? 'top-full mt-2' : 'bottom-full mb-2'
          }`}
        >
          {label}
        </span>
      )}
      <motion.span
        className="block transition-colors duration-200 flex items-center justify-center"
        style={{ color: logoUrl ? undefined : color }}
        animate={{
          scale: isHovered ? 1.1 : isBlinking ? 1.12 : 1,
          filter: isHovered ? 'brightness(1.2)' : isBlinking ? 'brightness(1.4)' : 'brightness(1)',
        }}
        transition={{ duration: 0.2 }}
      >
        {logoUrl ? (
          <img src={logoUrl} alt={label} width={28} height={28} className="object-contain" />
        ) : (
          <Icon size={28} />
        )}
      </motion.span>
    </motion.div>
  );
}

export function TechStripMobile({ className = '' }) {
  const [hovered, setHovered] = useState(null);
  const [blinkIndex, setBlinkIndex] = useState(0);
  const mid = Math.ceil(techLogos.length / 2);
  const row1Logos = techLogos.slice(0, mid);
  const row2Logos = techLogos.slice(mid);

  useEffect(() => {
    const id = setInterval(() => {
      setBlinkIndex((i) => (i + 1) % techLogos.length);
    }, BLINK_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const renderRow = (items, direction) => {
    /* 3 copies: scroll by 1/3 so view is always full, loop is seamless */
    const duplicated = [...items, ...items, ...items];
    const marqueeClass = direction === 'ltr' ? 'tech-marquee-ltr' : 'tech-marquee-rtl';
    return (
      <div
        className={`tech-marquee-row flex gap-4 ${marqueeClass}`}
        style={{ willChange: 'transform', width: 'max-content' }}
      >
        {duplicated.map((item, index) => {
          const originalIndex = techLogos.findIndex((t) => t.label === item.label);
          const isBlinking = originalIndex === blinkIndex;
          return (
            <TechLogoItem
              key={`${item.label}-${direction}-${index}`}
              Icon={item.Icon}
              label={item.label}
              color={item.color}
              logoUrl={item.logoUrl}
              isBlinking={isBlinking}
              isHovered={hovered === item.label}
              onHover={setHovered}
              onTap={(label) => setHovered((prev) => (prev === label ? null : label))}
              showLabelBelow
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`md:hidden overflow-x-hidden pt-4 pb-2 -mx-2 space-y-0 ${className}`}
      style={{ overscrollBehavior: 'contain' }}
    >
      <div className="overflow-x-hidden w-full pb-6">{renderRow(row1Logos, 'ltr')}</div>
      <div className="overflow-x-hidden w-full pb-12">{renderRow(row2Logos, 'rtl')}</div>
    </div>
  );
}
