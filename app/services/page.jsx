"use client";

import { BsArrowDownRight } from 'react-icons/bs'; // Corrected import statement
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesData = [
  {
    num: '01',
    title: "Web Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: ""
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: ""
  },
  {
    num: '03',
    title: "Logo Design",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: ""
  },
  {
    num: '04',
    title: "SEO",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid gird-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesData.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group" >
                <div className="w-full flex justify-between items-center"> 
                <div className="text-5xl font-extrabold">
                    <span className="text-outline text-transparent group-hover:text-blue-500 transition-all duration-500">{service.num}</span>
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div> 
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
