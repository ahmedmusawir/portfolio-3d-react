import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectsFeatured } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BsFillEyeFill } from "react-icons/bs";

const isSmallDevice = () => window.innerWidth < 1200;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
  disableAnimations,
}) => {
  const CardElement = disableAnimations ? "div" : motion.div;

  return (
    <CardElement
      variants={
        disableAnimations ? {} : fadeIn("up", "spring", index * 0.5, 0.75)
      }
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl lg:w-[350px] md:w-full sm:w-full"
      >
        {/* <div className="relative w-full h-[230px]"> */}
        <div className="relative w-full h-[330px] sm:h-[450px] lg:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-50"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(project_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <BsFillEyeFill />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </CardElement>
  );
};

const WorksFeatured = () => {
  const TextElement = isSmallDevice() ? "div" : motion.div;
  const ParagraphElement = isSmallDevice() ? "p" : motion.p;

  return (
    <>
      <TextElement
        variants={isSmallDevice() ? {} : textVariant()}
        className="text-center"
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </TextElement>

      <div className="w-full flex justify-center">
        <ParagraphElement
          variants={isSmallDevice() ? {} : fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </ParagraphElement>
      </div>

      <h4
        className="mt-10 text-center text-[2.5rem]"
        style={{ marginTop: "4rem" }}
      >
        Featured Projects
      </h4>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projectsFeatured.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            disableAnimations={isSmallDevice()}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksFeatured, "work");
