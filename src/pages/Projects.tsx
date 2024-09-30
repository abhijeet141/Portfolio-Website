import { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image1 from '../assets/project1.png'
import Image2 from '../assets/project2.png'
import Image3 from '../assets/project3.png'
import Image4 from '../assets/image4.png'
import { WorkSliderBtns } from "@/components/WorkSliderBtns";


const project = [{
    id: '01',
    category: 'CropForesight',
    description: 'CropForesight is an intelligent platform designed to help farmers make informed decisions. It uses a Logistic Regression model to recommend crops based on factors like soil composition, pH, and rainfall. The app also includes an AlexNet-powered deep learning model for detecting tomato plant diseases through image uploads via Cloudinary. Built with a responsive ReactJS frontend and a FastAPI backend, the project attracted contributions from over 60 developers, fostering strong community engagement across two repositories.',
    stack: [{
        name: 'React'
    },{
        name: 'JavaScript'
    },{
        name: 'CSS'
    },{
        name: 'FastAPI'
    }],
    image: Image1,
    livelink: 'https://crop-foresight-front-end.vercel.app/',
    github: 'https://github.com/abhijeet141/CropForesight'
},
{
    id: '02',
    category: 'BlogVerse',
    description: 'BlogVerse is a full-stack blogging platform that allows users to create, publish, and read blog posts. The frontend is built with React, TypeScript, and Tailwind CSS, offering a user-friendly interface. The serverless backend, powered by Hono and Cloudflare Workers, ensures fast and scalable content management. Key features include secure user authentication, blog post management, reading time calculation, and author-specific pages. Prisma ORM and PostgreSQL are used for efficient data storage and management, while Zod ensures schema validation for data integrity.',
    stack: [{
        name: 'React'
    },{
        name: 'TypeScript'
    },{
        name: 'Hono'
    },{
        name: 'TalwindCSS'
    },],
    image: Image2,
    livelink: 'https://blogverse-drab.vercel.app/',
    github: 'https://github.com/abhijeet141/BlogVerse'
},
{
    id: '03',
    category: 'EduCart Backend',
    description: 'EduCart is a comprehensive backend solution for an educational platform, designed to facilitate user authentication, data management, and API interactions. Built using Express.js and TypeScript, this robust backend supports secure user logins through JWT, while ensuring data integrity with Zod for validation. The application leverages MongoDB for efficient storage of user accounts and course information, enabling smooth management and access to educational content.',
    stack: [{
        name: 'Express'
    },{
        name: 'TypeScript'
    },{
        name: 'Zod'
    },],
    image: Image3,
    github: 'https://github.com/abhijeet141/EduCart-Backend'
},
{
    id: '04',
    category: 'Sorting Visualizer',
    description: 'The Sorting Visualizer is an interactive tool developed with React and TypeScript that allows users to visualize the workings of various sorting algorithms. This project features multiple sorting methods, including bubble sort, insertion sort, merge sort, and quick sort, enabling users to compare their efficiency and understand their mechanics in real-time.',
    stack: [{
        name: 'React'
    },{
        name: 'TypeScript'
    },{
        name: 'CSS'
    },],
    image: Image4,
    livelink: 'https://abhijeet-sorting-visualizer.netlify.app/',
    github: 'https://github.com/abhijeet141/sorting-visualizer'
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
                        {projects.category}
                    </h2>
                    <p className="text-black/60 text-justify text-sm">
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
                                    <img className="" src={item.image} alt=""/>
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