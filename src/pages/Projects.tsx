import { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import { WorkSliderBtns } from "@/components/WorkSliderBtns";


const project = [{
    id: '01',
    category: 'full stack',
    description: 'CropForesight is a powerful crop recommendation website that helps farmers and agriculture enthusiasts make informed decisions about the best crop to cultivate on a given land. In addition, CropForesight employs an AlexNet model for the classification of tomato leaf diseases.',
    stack: [{
        name: 'React'
    },{
        name: 'FastAPI'
    },{
        name: 'AlexNet'
    },{
        name: 'CSS3'
    }],
    image: Image1,
    livelink: '',
    github: ''
},
{
    id: '02',
    category: 'full stack',
    description: 'This project is a full-stack bank application that allows users to manage their accounts, send money, and access their balances.',
    stack: [{
        name: 'React'
    },{
        name: 'Express'
    },{
        name: 'TalwindCSS'
    },],
    image: Image2,
    livelink: '',
    github: ''
},
{
    id: '03',
    category: 'frontend',
    description: 'This project provides the backend infrastructure for the Educart platform. It handles user authentication, data storage, and API endpoints for various functionalities.',
    stack: [{
        name: 'Express'
    },{
        name: 'Zod'
    },],
    image: Image3,
    livelink: '',
    github: ''
},
{
    id: '04',
    category: 'frontend',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam consectetur tempore rerum placeat dolores!',
    stack: [{
        name: 'Html5'
    },{
        name: 'CSS3'
    },{
        name: 'JavaScript'
    },],
    image: Image4,
    livelink: '',
    github: ''
}
]


export function Projects(){
    const [projects, setProjects] = useState(project[0])
    return(
        <div className="container flex flex-col justify-center">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                    <div className="text-8xl leading-none font-extrabold text-white" style={{ WebkitTextStroke: '2px black' }}>
                        {projects.id}
                    </div>
                    <h2 className="text-[42px] font-bold leading-none hover:text-custom-orange transition-all duration-500 capitalize">
                        {projects.category} Project
                    </h2>
                    <p className="text-black/60">
                        {projects.description}
                    </p>
                    <ul className="flex gap-4 border-b-2">
                        {projects.stack.map((item,index)=>{
                            return <li key={index} className="text-xl text-custom-orange">
                                {item.name}
                                {index !== projects.stack.length - 1 ? ",":""}
                            </li>
                        })}
                    </ul>
                    <div className="flex gap-40 mt-4 my-4">
                        <div className="ml-10">
                            <a href={projects.livelink} className="w-9 h-9 border border-black rounded-full flex justify-center items-center hover:transition-all duration-500" target="_blank" rel="noopener noreferrer">
                            <Button variant={'orange'}>
                            <span className="mr-2">Live Link</span>
                            <BsArrowUpRight/>
                            </Button> 
                            </a>
                        </div>
                        <div>
                        <a href={projects.github} className="w-9 h-9 border border-black rounded-full flex justify-center items-center hover:transition-all duration-500" target="_blank" rel="noopener noreferrer">
                         <Button variant={'orange'}>
                         <span className="mr-2">Github Repository</span>
                              <BsGithub/>
                        </Button>
                         </a>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[548px]"
                    onSlideChange={(swiper)=>{
                        const currIndex = swiper.activeIndex;
                        setProjects(project[currIndex]);
                    }}>
                        {project.map((item,index)=>{
                            return <SwiperSlide key={index}>
                                <div className="xl:mt-12 md:mt-28">
                                    <div></div>
                                    <div>
                                    <img src={item.image} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    <WorkSliderBtns></WorkSliderBtns>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}