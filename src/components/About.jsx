import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const isSmallDevice = () => window.innerWidth < 1200;

const ServiceCard = ({ index, title, icon, disableAnimations }) => {
  const CardElement = disableAnimations ? "div" : motion.div;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <CardElement
        variants={
          disableAnimations ? {} : fadeIn("right", "spring", index * 0.5, 0.75)
        }
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </CardElement>
    </Tilt>
  );
};

const About = () => {
  const TextElement = isSmallDevice() ? "div" : motion.div;
  const ParagraphElement = isSmallDevice() ? "p" : motion.p;

  return (
    <>
      <TextElement
        variants={isSmallDevice() ? {} : textVariant()}
        className="text-center"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </TextElement>

      <div className="flex justify-center">
        <ParagraphElement
          variants={isSmallDevice() ? {} : fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          I'm a skilled software developer with experience in ES6/7/8 JavaScript
          and React.js, and expertise in frontend frameworks like Next.js,
          Node.js etc., and backend frameworks/CMS-s like Rapid API, Sanity.io,
          WordPress etc. I'm a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let's work together to bring your
          ideas to life!
        </ParagraphElement>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            disableAnimations={isSmallDevice()}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
