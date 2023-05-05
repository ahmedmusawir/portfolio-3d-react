import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const isSmallDevice = () => window.innerWidth < 1200;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const TextElement = isSmallDevice() ? "div" : motion.div;

  return (
    <>
      <TextElement
        variants={isSmallDevice() ? {} : textVariant()}
        className="text-center"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full mx-auto">
          <a
            href="https://www.linkedin.com/in/ahmedmusawir/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-10 border hover:bg-gray-700 w-70 text-center self-center my-3"
          >
            Full Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedmusawir/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-10 border hover:bg-gray-700 sm:ml-2 self-center w-70 text-center"
          >
            Other Achievements
          </a>
        </div>
      </TextElement>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "resume");
