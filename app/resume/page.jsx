"use client";

import React from 'react';
import { FaHtml5, FaJs, FaCss3, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
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
  title: "My Experiences",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
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
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
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
      degree: "Web programming",
      duration: "2023",
    },
  ],
};

// Skills
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
  skillList: [
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
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
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
            <TabsTrigger value="skills">Competences</TabsTrigger>
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
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3>
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
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
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3>
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        {skill.icon}
                        <span className="text-accent">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((info, index) => (
                    <div key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">
                        {info.fieldName}
                      </span>
                      <h3>
                        {info.fieldValue}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
