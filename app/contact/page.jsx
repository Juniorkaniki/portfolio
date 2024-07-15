"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { motion } from "framer-motion";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xvgpgbqn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Message sent successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Travaillons ensembles !!</h3>
              <p className="text-white/60">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum enim molestias eos ratione magni dolores quas et eius
                dolor, fuga nulla? Architecto
              </p>
              {/* hidden input for redirection */}
              <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Prénom" name="firstName" onChange={handleChange} value={formData.firstName} />
                <Input type="text" placeholder="Nom" name="lastName" onChange={handleChange} value={formData.lastName} />
                <Input type="email" placeholder="Adresse email" name="email" onChange={handleChange} value={formData.email} />
                <Input type="tel" placeholder="Numéro de téléphone" name="phone" onChange={handleChange} value={formData.phone} />
              </div>
              {/* select */}
              <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a services</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                onChange={handleChange}
                value={formData.message}
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none md-8 xl:mb-0">
            <div>
              {info.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h4 className="text-lg text-accent">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {successMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-xl text-accent">{successMessage}</p>
              <Button size="md" className="mt-4" onClick={() => setSuccessMessage('')}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
