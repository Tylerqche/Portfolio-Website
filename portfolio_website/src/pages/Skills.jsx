import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Line from '../components/Line';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faPython,
  faJava,
  faJsSquare,
  faCss3,
  faHtml5,
  faLinux,
  faGit,
  faJira
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  { icon: faPython, text: 'Python' },
  { icon: faReact, text: 'React' },
  { icon: faJava, text: 'Java' },
  { icon: faJsSquare, text: 'JavaScript' },
  { icon: faDatabase, text: 'SQL' },
  { icon: faCss3, text: 'CSS' },
  { icon: faHtml5, text: 'HTML' },
  { icon: faLinux, text: 'Linux' },
  { icon: faJira, text: 'Jira' },
];

const IconDiv = ({ icon, text }) => {
  return (
    <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div style={{ width: '140px', height: '100px' }} className="bg-secondary shadow-md font-semibold text-center flex flex-col items-center justify-center border border-accent hover:scale-110 hover:bg-primary duration-500 rounded-md">
        <div className="text-6xl mb-1">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <section id="skills" className="pt-10 pb-24">
        <div className="flex flex-col items-center gap-16 mt-32 lg:max-w-screen-lg mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              Tech Stack
            </p>
            <Line />
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-16 lg:max-w-screen-lg mx-auto mb-20">
          {skillsData.map((skill, index) => (
            <IconDiv key={index} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;