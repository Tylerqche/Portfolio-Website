import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Line from "../components/Line";
import React, { useEffect } from 'react';
import VerticalTimelineComponent from "../components/VerticalTimelineComponent";

const Experience = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <section id="experience" className="pt-10 pb-24">
        <div className="flex flex-col items-center gap-16 mt-32">
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
              Experience
            </p>
            <Line />
          </motion.div>
          <VerticalTimelineComponent />
        </div>
      </section>
    </div>
  );
};

export default Experience;
