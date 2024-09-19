import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experience = {
    title: "My Experience",
    items:[{
        program: "GirlScript Summer Of Code",
        role: "Project Admin",
        duration:"May 2023 - August 2023",
        description: ["Administered the CropForesight project, coordinating with multiple contributors, reviewing issues, and assigning tasks to ensure smooth project progress.","Conducted thorough code reviews, provided constructive feedback, and ensured high-quality code contributions by merging pull requests and managing version control using Git.","Demonstrated expertise in Git by efficiently merging, reverting changes, and managing the project’s codebase, ensuring consistent and reliable development."]
    }]
}

const education = {
    title: "My Education",
    items:[{
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology in Computer Science",
        duration: "July 2020 – June 2024",
        location: "Jalandhar,Punjab",
        cgpa: "8.60/10"
    }]
}

export function Experience(){
    return(
        <div className="min-h-[78vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
                <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col text-center xl:text-left gap-2 bg-gray-100 p-6 rounded-xl">
                        <div>
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        </div>
                        <div>
                            <ul>
                                {experience.items.map((item,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="flex flex-col xl:flex-row justify-between font-bold gap-2">
                                            <h3>{item.role}</h3>
                                            <span>{item.duration}</span>
                                            </div>
                                            <div className="flex flex-col gap-4 text-justify">
                                                <div className="text-center mt-2 xl:text-left font-bold">{item.program}</div>
                                                {item.description.map((element,index) => (<p key={index}>{element}</p>))}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col text-center xl:text-left gap-6  bg-gray-100 p-6 rounded-xl">
                        <div>
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        </div>
                        <div className="">
                            <ul>
                                {education.items.map((item,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="flex flex-col xl:flex-row justify-between">
                                            <h3>{item.institution}</h3>
                                            <div className="font-bold">{item.duration}</div>
                                            </div>
                                            <div className="flex flex-col xl:flex-row justify-between mt-4">
                                                <div>{item.degree}</div>
                                                <div>{item.location}</div>
                                            </div>
                                            <div className="mt-2 font-bold">
                                                CGPA: {item.cgpa}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </TabsContent>
            </div>
          </Tabs>
        </div>
        </div>
    )
}