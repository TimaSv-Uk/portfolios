import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} select-none absolute inset-0 
        top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row  items-start  gap-5`}
      >
        <div className="w-3/6 flex flex-row gap-4">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 smh-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, i&apos;m <span className="text-[#915eff]">Tima</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              I develop user interfaces and
              <br className="sm:block hidden" /> fullstack web aplications
            </p>
          </div>
        </div>
    
        <ComputersCanvas/>

        <div className="absolute right-2/4 xs:bottom-10
        bottom-32  flex items-center justify-center">
          <a href="#about" >
            <div className="w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:"loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
            >

            </motion.div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
