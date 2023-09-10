import { HiExternalLink } from "react-icons/hi";
import React, { useState } from "react";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { Circle, DivideSquare } from "react-feather";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
            key="html"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/css3.png"
            alt="css3"
            key="css"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
            key="js"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/react-native.png"
            alt="react-native"
            key="react"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/nodejs.png"
            alt="nodejs"
            key="node"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/officel/80/000000/express-js.png"
            alt="express-js"
            key="express"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
            key="tailwind"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/bootstrap.png"
            alt="bootstrap"
            key="bootstarp"
          />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/figma--v1.png"
            alt="figma--v1"
            key="figma"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
            alt="adobe-photoshop--v1"
            key="photoshop"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/adobe-xd--v1.png"
            alt="adobe-xd--v1"
            key="xd"
          />,
        ],
      },
      {
        title: "Others",
        icons: [
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/git.png"
            alt="git"
            key="git"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-sharp/48/000000/github.png"
            alt="github"
            key="github"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
            alt="amazon-web-services"
            key="aws"
          />,
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png"
            alt="external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo"
            key="netlify"
          />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "MASTER OF COMPUTER APPLICATION (MCA)",
        name: "T John College,Bangalore ",
        stage: "2021 - Present",
      },
      {
        title: "BACHELOR OF COMPUTER APPLICATION (BCA)",
        name: "IHRD College of Applied Science,Adoor",
        stage: "2018 - 2021",
      },
    ],
  },

  {
    title: "Certificates",
    info: [
      {
        title: "Microsoft Certified: Azure Fundamentals",
        name: " Issued by : Microsoft",
        link: "https://www.credly.com/badges/9b17fdf3-587a-4572-8ac1-baf434da74bc/linked_in?t=ro9vuo",
        stage: "2023",
      },
      {
        title: "UI/UX Design with Figma",
        name: " Issued by : Udemy",
        link: "https://www.udemy.com/certificate/UC-be4553b2-7e4e-40d5-af4c-a3f39096e854/",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const currentInfo = aboutData[index].info;

  const currentMainSectionTitle = aboutData.find((section) =>
    section.info.some((item) => item.title === currentInfo[0].title)
  )?.title;

  return (
    <div className="max-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-auto scrollbar-none scroll-smooth">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>

      <div className="container mx-auto  flex flex-col items-center xl:flex-row gap-x-6 font-semibold ">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col  justify-center overflow-y-auto"
        >
          <h2 className="h2">
            Crafting Web Experiences with{" "}
            <span className="text-accentprimary"> Passion</span> and{" "}
            <span className="text-accentprimary">Code </span>{" "}
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-8">
            {" "}
            Hey there, I&rsquo;m Anandhu S Kumar, a dedicated and skilled MERN
            stack developer. With a strong passion for problem-solving and a
            commitment to delivering high-quality solutions, I thrive in the
            dynamic world of web development. I embrace challenges with open
            arms, believing that they&rsquo;re stepping stones to progress.
            Self-motivated and adaptable, always excited to explore new
            opportunities and expand my skills.Let&rsquo;s connect and explore
            the world of web development together!
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[380px] z-20"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:m-0 mb-4">
            {aboutData.map((item, idx) => {
              return (
                <div
                  className={`${
                    index === idx &&
                    "text-accentprimary after:w-[100%] after:bg-accentprimary  after:transition-all after:duration-300 "
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute font-semibold after:-bottom-1 after:left-0`}
                  key={idx}
                  onClick={() => setIndex(idx)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col  gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col  max-w-max gap-x-2   text-white/60"
                >
                  <div className="font-bold text-lg text-white mb-2 md:mb-0  ">
                    {item.title}
                  </div>
                  <div className="font-semibold text-base mb-2 md:mb-0  ">
                    {item.name}
                  </div>

                  <div className="text-sm">{item.stage}</div>
                  <div className="text-xs cursor-pointer w-full">
                    {currentMainSectionTitle === "Certificates" ? (
                      <a href={item.link} className="flex items-center">
                        View{" "}
                        <span className="text-accentprimary text-base">
                          <HiExternalLink />
                        </span>
                      </a>
                    ) : null}
                  </div>

                  <div className="flex gap-x-4 items-center">
                    {item.icons?.map((icon, idx) => {
                      return (
                        <div key={idx} className="text-2xl ">
                          {" "}
                          {icon}{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
