"use client";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+243) 972 800 949",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "junior@semanumerique.com, juniorkaniko00@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Drc, Goma, commune de karisimbi ",
  },
];
import { motion } from "framer-motion";
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* from */}
            <div className="xl:h-[54%] order-2 xl:order-none">
                <form action=""></form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none md-8 xl:mb-0">
                info
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
