import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon}) => {

  return(
    <Tilt className="xs:w-[200px] w-full flex items-center justify-center">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className=" w-full  rounded-[20px] shadow-card green-pink-gradient p-[1px]"
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
        >
          <img src={icon} alt={title} />
          <h3 className='text-[20px] text-white font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
    
  )
}

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
     </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I'm a passionate software developer and computer science student with expertise in 
modern web technologies including JavaScript, TypeScript, React, PHP, and Python. I specialize in full-stack 
development, crafting applications that seamlessly blend powerful functionality with exceptional user experience. 
My curiosity drives me to continuously explore new technologies and methodologies, while my problem-solving 
mindset helps me tackle challenges with creative, efficient solutions. I believe great software comes from 
understanding both the technical requirements and the human needs behind every project.
        <br/>
        <br/>
      When I'm not at my computer, you'll likely find me planning my next move on a chessboard or on the volleyball court.
      </motion.p>
        {/* 
      <div className="mt-20 flex flex-wrap gap-10">
      {services.map((services,index) => (
        <ServiceCard key={services.title} index={index} {...services}/>
      )) }
    </div>
         */}
    </>
  );
};

export default SectionWrapper(About,"about") ;
