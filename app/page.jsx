'use client';

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const handleDownload = () => {
  const pdfUrl = "/assets/pdf/cvkaniki.pdf"; // Chemin vers ton fichier PDF dans le dossier public
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "cvkaniki.pdf"; // Nom du fichier téléchargé
  link.click();
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-4">
              Hello, I'm <br /> <span className="text-blue-500">Kaniki Junior</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/70">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload} // Appel de la fonction handleDownload lors du clic sur le bouton
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Stats />
    </section>
  );
};

export default Home;
