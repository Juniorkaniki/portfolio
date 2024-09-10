"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Mobile App",
    title: "Project 1",
    description:
      "Développement d'une application pour une association de développeurs dans plusieurs domaines. Le projet est actuellement en pause pour des raisons internes.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "My Sql" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Juniorkaniki/portfolio",
  },
  {
    num: "02",
    category: " Joby App",
    title: "Project 2",
    description:
      "Joby est une application qui aide plusieurs personnes à être tenues au courant des offres d'emploi en temps réel et à trouver un travail facilement.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "My Sql" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Porfolio personne",
    title: "Project 3",
    description:
      "Ce portfolio personnel a été développé pour présenter mon travail en tant que développeur et informaticien. Il inclut une sélection de projets réalisés au cours de ma carrière, allant de conceptions des applications mobiles et des applications Desktop fonctionnelles. Le site met en avant mon expertise en design d'interface utilisateur, en développement mobile et en création de contenu visuel.",
    stack: [{ name: "Next,js" }, { name: "Tailwind.css" }, ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setProject(projects[newIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projects category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-blue-500">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/* buttons*/}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image} 
                          layout="fill"
                          objectFit="cover"  
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottm-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full jusitify-between xl:w-max xl:justify-none" btnStyles="bg-blue-500 hover:bg-blue-600-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
