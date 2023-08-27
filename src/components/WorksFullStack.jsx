import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { projectsFullStack } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BsEye, BsFillEyeFill } from "react-icons/bs";

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
        // className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        className="bg-tertiary p-5 rounded-2xl lg:w-[350px] md:w-full sm:w-full"
      >
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

const WorksFullStack = () => {
  const TextElement = isSmallDevice() ? "div" : motion.div;
  const ParagraphElement = isSmallDevice() ? "p" : motion.p;

  return (
    <>
      <h4 className="text-center text-[2.5rem]" style={{ marginTop: "-4rem" }}>
        Full Stack w/ CMS-s
      </h4>

      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {projectsFullStack.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            disableAnimations={isSmallDevice()}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksFullStack, "");
