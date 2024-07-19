"use client";

import React from 'react';
import { FaHtml5, FaJs, FaCss3, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiDart, SiCsharp, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const about = {
  title: "A propos de moi",
  description:
    "Je suis Kaniki Junior, un jeune développeur congolais qui a fait ses études en informatique de gestion à l'ISIG Goma. Je suis développeur mobile en Flutter et Dart, mais j'ai également fait un peu de graphisme avec Photoshop et Illustrator, ainsi que la création de maquettes avec Adobe XD et Figma.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Junior Kaniki",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+243) 972 800 949",
    },
    {
      fieldName: "Experiences",
      fieldValue: "3+ Ans",
    },
    {
      fieldName: "Skype",
      fieldValue: "Junior.243",
    },
    {
      fieldName: "Nationalite",
      fieldValue: "Congolaise",
    },
    {
      fieldName: "Email",
      fieldValue: "juniorkaniki00@gmail.com, junior@semanumerique.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponibles",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais, Swahili",
    },
  ],
};

// experiences data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon Experiences",
  description:
    "Mon expérience dans le développement d'applications mobiles date de quelques années déjà. Après ma formation en développement mobile avec Flutter et Dart chez CRES, dans le programme Ujuzi, je continue l'auto-formation pour affiner mes compétences en faisant également du développement desktop et du graphisme.",
  items: [
    {
      company: "RME",
      position: "UI/UX Designer",
      duration: "2024 - Present",
    },
    {
      company: "Sema Numerique",
      position: "UI/UX Designer, Web Designer, Mobile Dev & Desktop Dev",
      duration: "Avril 2023 - 2024",
    },
    {
      company: "Mawe",
      position: "Desktop Developer",
      duration: "Janvier 2023 - Mars 2023",
    },
    {
      company: "Sema Numerique",
      position: "UI/UX & Développeur Mobile",
      duration: "2022 - 2023",
    },
    {
      company: "CRES",
      position: "Développeur Mobile",
      duration: "Mars 2022 - Septembre 2022",
    },
    {
      company: "Freelance",
      position: "Développeur Desktop",
      duration: "Juin 2021 - Décembre 2021",
    },
    {
      company: "Freelance",
      position: "Graphismes",
      duration: "UI/UX Designer",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon Education",
  description:
    "Concernant mon éducation, tout juste après avoir obtenu mon diplôme d'État, j'ai commencé à faire une année préparatoire à l'ULPGL. Cela m'a beaucoup aidé à comprendre le monde académique. Pour ma première, deuxième et troisième année de graduat, je les ai faites à l'ISIG-Goma où j'ai vraiment appris beaucoup de choses en développement d'applications web, mobiles et desktop, mais également dans d'autres domaines informatiques comme les réseaux, le cloud computing, les algorithmes, etc. Mes années de licence, je les ai également faites à l'ISIG-Goma, ce qui a vraiment affiné mes connaissances dans plusieurs domaines informatiques, notamment en développement d'applications.",
  items: [
    {
      institution: "Tupedane Institut",
      degree: "Diplôme d'Etat en technique Social",
      duration: "2018",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G1 en Informatique de gestion",
      duration: "2019-2020",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G2 En Informatique de gestion",
      duration: "2020-2021",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G3 En Informatique de gestion",
      duration: "2021-2022",
    },
    {
      institution: "ISIG-GOMA",
      degree: "Licences En Informatique de gestion",
      duration: "2022-2023",
    },
    {
      institution: "CFPI-GOMA",
      degree: "analyse de donnes",
      duration: "2023",
    },
  ],
};

// Skills
const skills = {
  title: "Mes compétences",
  description:
    "J’ai programmé en Flutter et Dart pendant plusieurs années, ainsi qu'en C#. J’ai également conçu des interfaces utilisateur avec Adobe XD et acquis d’autres compétences dans le développement web à la faculté, ainsi que lors de formations professionnelles et d’auto-formation.",
  skillList: [
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiDart />,
      name: "Dart",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illustrator",
    },
    
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experiences" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="education">Educations</TabsTrigger>
            <TabsTrigger value="skills" >Competences</TabsTrigger>
            <TabsTrigger value="about">A propos de Moi</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-blue-500">
                          {item.duration}
                        </span>
                        <h3>
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-blue-500">
                          {item.duration}
                        </span>
                        <h3>
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                      <li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-blue-500 transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalaze">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )})}
                  </ul>
                <ScrollArea className="h-[400px]">
                  
                </ScrollArea>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] ">
                  {about.info.map((item, index)=>{
                    return(
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span  className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                      
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
