import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justeify-between xl:pt-8 xl:pd-24">
          {/* text*/}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Software Developper</span>
            <h1 className="h1 mb-4">
              hello I'm <br />{" "}
              <span className="text-accent">Kaniki Junior</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/70 ">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages amd technogies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo  />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Stats />
    </section>
  );
};

export default Home;
