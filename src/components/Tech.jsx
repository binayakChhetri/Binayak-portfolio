import { technologies } from "../constants";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { textVariant } from "../utlis/motion";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech I Know</p>
        <h2 className={styles.sectionHeadText}>Techonlogies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
