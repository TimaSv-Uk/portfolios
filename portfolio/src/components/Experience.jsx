import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    data={experiences.data}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={experiences.icon}
          alt={experiences.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]">{experiences.title}</h3>
      <p className="text-secondary text-[24px] font-semibold">{experiences.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experiences.points.map((point,index)=> (
        <li
        key={`expirience-point-${index}`}
        className="text-white-100 pl-1 text-[14px] tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Expirience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
