"use client ";

import { Info } from "lucide-react";
import { FaHtml5, FaJs, FaCss3, FaFigma, FaNodeJs, FaFlu, FaDart,FaFlutter,FaCsharp, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
const about = {
  title: "About me ",
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
      fieldName: "Experiences ",
      fieldValue: "3+ Ans",
    },
    {
      fieldName: "Skpe",
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
      fieldName: "Lanngues",
      fieldValue: "Français, Anglais,Swahilli",
    },
  ],
};
//experineces data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experiences ",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
  items: [
    {
      company: "RME",
      position: "UI /UX Designer",
      duration: "2024 - Present",
    },
    {
      company: "Sema Numerique",
      position: "UI /UX Designer, Web Designer, Mobile Dev & desktop dev",
      duration: " Avril 2023 - 2024 ",
    },
    {
      company: "Mawe ",
      position: "Desktop Developer",
      duration: "janvier 2023 - mars  2023 ",
    },
    {
      company: "sema Numerique",
      position: "UI /UX & Developpeur Mobile",
      duration: "2022 - 2023 ",
    },
    {
      company: "CRES .",
      position: "Developpeur Mobile",
      duration: "mars 2022 - septembre 2022 ",
    },
    {
      company: "Freelance",
      position: "Developpeur DeskTop",
      duration: "juin 2021 - decembre 2021",
    },
    {
      company: "Freelance ",
      position: "Graphismes ",
      duration: "ui /ux desiner ",
    },
  ],
};
// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education ",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
  items: [
    {
      institution: "Tupedane Institut",
      degree: "Social Diplôme d'Etat ",
      duration: " 2018 ",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G1 en Informatique de gestion ",
      duration: " 2019-2020 ",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G2 En Informatique de gestion ",
      duration: " 2020-2021 ",
    },
    {
      institution: "ISIG-GOMA",
      degree: "G3 En Informatique de gestion ",
      duration: " 2021-2022 ",
    },
    {
      institution: "ISIG-GOMA",
      degree: "licences En Informatique de gestion ",
      duration: " 2022-2023 ",
    },
    {
      institution: "CFPI-GOMA",
      degree: "Web programming",
      duration: " 2023",
    },
  ],
};
//Skills
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia excepturi, corporis amet fugit voluptate, in quaerat dolores, nulla magni hic aspernatur velit aliquam atque repellat provident autem deserunt accusantium?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
        icon: <FaCss3 />,
        name: "Css 3",
    },
    {
        icon: <FaFlutter />,
        name: "Flutter ",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaCsharp />,
        name: "C#",
      },
      {
        icon: <FaReact />,
        name: "React.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css ",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js ",
      },
      {
        icon: <FaFigma />,
        name: "Figma ",
      },
  ],
};

import { Tabs, TabsContent,TabsList, TabsTrigger } from "@components/ui/Tabs";
import {motion} from "framer-motion"; 

const resume = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity:1, transition}}>resume page</motion.div>;
};
export default resume;
