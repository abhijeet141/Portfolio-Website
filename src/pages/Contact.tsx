import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


export function Contact(){
    return(
        <div className="container mx-auto">
            <div className="text-center xl:text-left">
                <h3 className="text-2xl">Contact Me</h3>
            </div>
                <div className="flex flex-col gap-6 p-10 bg-gray-100 rounded-xl mt-6">
                    <form action="">
                        <h3 className="text-sm text-center xl:text-lg text-black/75 mb-4">Contact me directly at <a href="mailto:sinhaabhijeet.smith@gmail.com" className="underline text-custom-orange">sinhaabhijeet.smith@gmail.com</a> or through this form.</h3>
                        <div className="flex flex-col gap-6">
                        <Input type="email" placeholder="Your Email" />
                        <Textarea className="h-[200px]" placeholder="Type your message here."></Textarea>
                        <div className="flex justify-center items-center sm:block">
                        <Button size={"sm"} variant={"orange"}>Send Message</Button>
                        </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}