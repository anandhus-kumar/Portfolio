import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import GallerySlider from "../../components/GallerySlider";

const Gallery = () => {
  return (
    <div className="h-screen bg-primary/30  flex items-center">
      <Circles />
      <div className="container mx-auto h-full py-10 xl:py-0 ">
        <div className="flex flex-col lg:flex-row mt-10  h-full items-center justify-center gap-x-10 gap-y-5  ">
          <div className="flex  flex-col items-center justify-center w-[50%] h-[100px] gap-y-5">
            <h2 className="text-5xl  font-bold capitalize text-center">
              {" "}
              Snapshots & Sketches{" "}
            </h2>
            <p className="text-lg text-center hidden xl:flex">
              &rdquo;Explore the intersection of my lens and my imagination in
              this diverse gallery. Featuring a blend of captivating photographs
              and intricate drawings&rdquo;
            </p>
          </div>
          <div>
            <GallerySlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Gallery;
