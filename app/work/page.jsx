"use client";
import { motion } from "framer-motion";
import React from "react";

import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";


const projects =[
    {
        num:"01",
        category: "forntend",
        title: "Project 1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, laborum repellendus deserunt nesciunt amet dolore possimus. Ipsa ab, nostrum tempora, inventore quisquam minima culpa voluptate ad tenetur consequatur impedit incidunt",
        stack:[{name:"Html 5"}]
    },
]
const work = () => {
    return <div>work page</div>;
};

export default work;