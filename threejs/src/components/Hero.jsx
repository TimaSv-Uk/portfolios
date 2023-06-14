import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} select-none absolute inset-0 
        top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row  items-start  gap-5`}
      >
        <div className=" flex flex-row gap-4">
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
              <br /> fullstack web aplications
            </p>
          </div>
        </div>
        <ComputersCanvas className="w-[200px]" Dmodel={"desktop_pc"}/>
      </div>
    </section>
  );
};

export default Hero;
