import Search from "@/components/Search";
import { Filter, Heart, Lightbulb } from "lucide-react";
export default function Home() {
  return (
    <div className="pt-40 h-screen w-screen">
      <div>
        <h1 className="text-5xl text-white font-semibold text-center mb-5">
          Business Name Generator
        </h1>
        <p className="text-white text-center text-xl">
          Generate Business Name By Our AI-powered Tool
        </p>

        <Search />
      </div>

      <div className="flex justify-between gap-20 px-44 mt-20">
        <div className="border border-primary p-4 rounded-lg">
          <Lightbulb className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-bold">Generate Idea</h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam
            doloribus voluptate a animi, rem cum iure veniam illum quod?
          </p>
        </div>

        <div className="border border-primary p-4 rounded-lg">
          <Filter className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-bold">Filter Result</h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam
            doloribus voluptate a animi, rem cum iure veniam illum quod?
          </p>
        </div>

        <div className="border border-primary p-4 rounded-lg">
          <Heart className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-bold">Save Name</h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam
            doloribus voluptate a animi, rem cum iure veniam illum quod?
          </p>
        </div>
      </div>
    </div>
  );
}
