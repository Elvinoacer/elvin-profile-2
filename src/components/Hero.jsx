import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[80px] md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-60 md:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Elvin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user{" "}
            <span className="sm:inline hidden">interfaces</span>
            <span className="sm:hidden">UI</span> and{" "}
            <span className="sm:inline hidden">web applications</span>
            <span className="sm:hidden">web apps</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-8 bottom-24 md:bottom-10 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[30px] h-[54px] md:w-[35px] md:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 md:p-2">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
