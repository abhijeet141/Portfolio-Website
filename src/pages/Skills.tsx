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
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaGitAlt />,
      name: "Git"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI"
    },
    {
      icon: <TbBrandCpp />,
      name: "C++"
    },
    {
      icon: <TbFileTypeSql />,
      name: "SQL"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiExpress />,
      name: "Express.js"
    },
    {
      icon: <SiCloudflareworkers />,
      name: "Cloudflare Workers"
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
                                <div className="text-6xl transition-all duration-300">{item.icon}</div>
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