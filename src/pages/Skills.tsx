import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFastapi } from "react-icons/si";
import { TbBrandCpp, TbFileTypeSql } from "react-icons/tb";
import { SiMongodb, SiExpress, SiCloudflareworkers } from "react-icons/si";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      style: "#e34c26"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      style: "#264de4"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      style: "#f0db4f"
    },
    {
      icon: <FaReact />,
      name: "React",
      style: "#61dafb"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      style: "#68a063"
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      style: "#f1502f"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      style: "#007acc"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      style: "#38b2ac"
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
      style: "#009688"
    },
    {
      icon: <TbBrandCpp />,
      name: "C++",
      style: "#00599C"
    },
    {
      icon: <TbFileTypeSql />,
      name: "SQL",
      style: "#f29111"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      style: "#47A248"
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      style: "#404d59"
    },
    {
      icon: <SiCloudflareworkers />,
      name: "Cloudflare Workers",
      style: "#f38020"
    }
  ]
};


export function Skills(){
    return(
        <div className="container flex flex-col gap-[30px]">
            <div className="text-center xl:text-left">
                <h3 className="text-2xl">{skills.title}</h3>
            </div>
            <ul className="text-center xl:text-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-10">
                {skills.skillList.map((item,index)=>{
                    return <li key={index}><TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-gray-100 rounded-xl flex justify-center items-center">
                                <div className="text-6xl transition-all duration-300" style={{color: item.style}}>{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider></li>
                })}
            </ul>
        </div>
    )
}