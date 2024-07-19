"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesData = [
  {
    num: '01',
    title: "Mobile Development",
    description: "Développeur mobile passionné, spécialisé dans la création d'applications innovantes et performantes, il maîtrise les langages Flutter et Dart pour offrir des expériences utilisateur fluides",
    href: "https://github.com/Juniorkaniki/clone_chat2"
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: "je me consacre à créer des interfaces utilisateur à la fois intuitives et esthétiquement plaisantes. Grâce à une solide compréhension des principes de design et à une maîtrise des outils comme Adobe XD, Figma et Photoshop, je transforme des idées complexes en expériences utilisateur fluides et engageantes.",
    href: "https://github.com/Juniorkaniki/portfolio"
  },
  {
    num: '03',
    title: "Web Development",
    description: "j'interviens également dans la création de sites et d'applications web fonctionnels et attrayants. En utilisant des technologies essentielles comme HTML, CSS, JavaScript, et PHP, je mets en œuvre des solutions web qui sont non seulement performantes, mais aussi accessibles et faciles à utiliser.",
    href: "https://kanikijunior.vercel.com"
  },
  {
    num: '04',
    title: "Creation des application desktop",
    description: "Egalement impliqué dans le développement d'applications desktop en C#. En utilisant ce langage robuste, je conçois des solutions logicielles performantes et intuitives pour des environnements de bureau. Grâce à C#,",
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
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} legacyBehavior>
                    <a
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </a>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
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
