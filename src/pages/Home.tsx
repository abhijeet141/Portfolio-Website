import { Button } from "../components/ui/button"
import { FiDownload } from "react-icons/fi";
import { Socials } from "@/components/Socials";
import { Photo } from "@/components/Photo";
export function Home(){
    return(
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <h1 className="mb-6">Hi! I Am <span className="block xl:relative xl:inline-block"><Button variant={"blue"} className="h-14 w-13 text-lg xl:absolute xl:top-[-3.2rem]">Software Developer</Button> </span><span className="block my-4">Abhijeet Sinha</span></h1>
                        <p className="max-w-[500px] mb-9 text-black/80">I specialize in building dynamic, full-stack applications and I am Proficient in various programming languages and technologies.</p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                       <Button variant={'orange'} size={'lg'}>
                        <span>Download Resume</span>
                        <FiDownload className="text-xl pl-2"></FiDownload>
                        </Button> 
                        <div className="mb-8 xl:mb-0"><Socials iconstyles="w-9 h-9 border border-black rounded-full flex justify-center items-center hover:transition-all duration-500"></Socials></div>
                    </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo></Photo>
                    </div>
                </div>
            </div>
        </section>
    )
}