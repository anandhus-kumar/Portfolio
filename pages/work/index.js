import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-screen bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8 xl:pt-24">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 h-full pt-8">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accentprimary">..</span>
            </motion.h2>
            <p>
              Embark on a journey through my creations. A symphony of pixels, a
              dance of code—explore my world of digital enchantment.{" "}
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
