 "use client ";

 import { BsArrowDownRight } from 'react-icons';
 import Link from 'next/link';

 const service =[
    {
        num: '01',
        title:"Web Development",
        description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        href: ""
        
    },
    {
        num: '02',
        title:"UI/UX Design ",
        description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
         href: ""
        
    },
    {
        num: '03',
        title:"Logo Design",
        description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
         href: ""
        
    },
    {
        num: '04',
        title:"SEO",
        description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
         href: ""
        
    },
 ]
 import { motion } from 'framer-motion';

const services = () => {
    return (<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },}}></motion.div>
            </div>
        </section>
        );
};

export default services;