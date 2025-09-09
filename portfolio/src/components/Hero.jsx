import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

import { EarthCanvas } from "./canvas";
const Hero = () => {
return (
  <section className="relative w-full h-screen mx-auto flex items-center justify-center">
    <div
      className={`${styles.paddingX} select-none absolute inset-0 top-0 max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10`}
    >
      {/* Text Section */}
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="text-center md:text-left">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className="text-[#915eff]">Tima</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I develop user interfaces and
            <br /> fullstack web applications
          </p>
        </div>
      </div>

      {/* Earth Canvas Section */}
      <motion.div
        className="flex xs:flex-1 xs:h-auto md:h-[700px] h-[500px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  </section>
);
};

export default Hero;
