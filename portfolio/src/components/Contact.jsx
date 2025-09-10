import { motion } from "framer-motion";
import { styles } from "../style"; // use your global styles
import { slideIn } from "../utils/motion";

const SectionWrapper = (Component, idName) => () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="max-w-7xl mx-auto relative z-0 p-8"
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    <Component />
  </motion.section>
);

const Contact = () => {
  return (

    <div className="xs:mt-12 flex flex-col gap-10 overflow-hidden">
      <motion.div
        className="flex-[1] rounded-2xl p-8 bg-black-100"
        // You can uncomment slideIn if needed
        // variants={slideIn("left","tween",0.2,1)}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-secondary text-[18px] leading-[30px]">
            I'm always open to discussing new projects, creative ideas, or opportunities. The best way to reach me is by email.
          </p>
          <div  className="flex flex-1 gap-8">
          <div
            href="sviridenkotimofei@gmail.com"
            className="bg-tertiary  hover:bg-[#915eff] transition-colors duration-300 w-fit text-white font-bold py-4 px-8 rounded-xl text-center text-lg shadow-primary outline-1"
          >
            sviridenkotimofei@gmail.com
          </div>

          <a
            href="https://github.com/TimaSv-Uk"
            className="bg-tertiary  hover:bg-[#915eff] transition-colors duration-300 w-fit text-white font-bold py-4 px-8 rounded-xl text-center text-lg shadow-primary outline-1"
          >
            My github
          </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
