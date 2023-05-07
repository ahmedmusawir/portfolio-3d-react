import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import TheMoose from "../assets/Moose.png";
import HeroDesktop from "../assets/hero-img.png";

const isSmallDevice = () => window.innerWidth < 1000;

const Hero = () => {
  const [smallDevice, setSmallDevice] = useState(isSmallDevice());

  useEffect(() => {
    const handleResize = () => {
      setSmallDevice(isSmallDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Moose</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Sr. Web Developer & React Frontend Engineer{" "}
            <br className="sm:block hidden" />
            <small>
              My tools of the trade are Next.js, Redux, Node.js, SCSS, Git,
              Rapid API, Sanity.io, WordPress and more...
            </small>
          </p>
        </div>
      </div>

      {smallDevice ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={TheMoose}
            alt="TheMoose"
            className="object-contain w-full sm:w-1/2 mt-72 sm:mt-64"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={HeroDesktop}
            alt="TheMoose"
            className="object-contain w-full sm:w-1/2 mt-72 sm:mt-64"
          />
        </div>
        // <ComputersCanvas />
      )}
    </section>
  );
};

export default Hero;
