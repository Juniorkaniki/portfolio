import {Button} from "@/components/ui/button";

import {FilDownloard} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justeify-between xl:pt-8 xl:pd-24">
          {/* text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software  Developper</span>
            <h1  className="h1">
              hello I'm <br /> Kaniki Junior
            </h1>
            <p className="max-w-[500px] ">I excel at crafting elegant digital experiences and I am proficient in various programming languages amd technogies</p>
          </div>
        </div>

      </div>
 
    </section>
  );
};

export default Home;