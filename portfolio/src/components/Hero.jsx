import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="pt-[100px] relative w-full min-h-screen mx-auto flex items-center justify-center z-10">
      {/*  absolute inset-0 top-0 */}
      <div className={`${styles.paddingX} select-none max-w-7xl  mx-auto flex  flex-col md:flex-row lg:flex-row items-center justify-center gap-10`}>
        {/* Text Section */}
        <div className="flex flex-row-reverse sm:flex-row gap-4 items-center   sm:pt-5">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          <div className="text-center md:text-left">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I&apos;m <span className="text-[#915eff]">Tima</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              Passionate about turning ideas  
              <br />into reality with code
            </p>
          </div>
        </div>
        {/* Earth Canvas Section */}
        <div
          className="flex xs:flex-1 xs:h-auto sm:h-[400px]  md:h-[400px] h-[300px]"
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
        >
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
