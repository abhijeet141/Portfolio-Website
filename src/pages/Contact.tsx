import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {useState} from "react"
import axios from 'axios'
import swal from 'sweetalert';


export function Contact(){
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const validateEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleClick = async(event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
        setLoading(true);
        try{
            if (!email || !message) {
                swal("Please fill out all required fields.","","error");
                return;
            }
            if(!validateEmail(email)){
                swal("Please enter a valid email address.","","error");
                return;
            }
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/message`,{
                email,
                message
            })
            await swal(response.data.message,"","success")
            setEmail('');
            setMessage('');
        }
        catch(error){
            await swal('Failed to send message',"","error");
            setEmail('')
            setMessage('')
        }
        finally {
            setLoading(false);
        }
    }

    return(
        <div className="container mx-auto">
            <div className="text-center xl:text-left">
                <h3 className="text-2xl">Contact Me</h3>
            </div>
                <div className="flex flex-col gap-6 p-10 bg-gray-100 rounded-xl mt-6">
                    <form>
                        <h3 className="text-sm text-center xl:text-lg text-black/75 mb-4">Contact me directly at <a href="mailto:sinhaabhijeet.smith@gmail.com" className="underline text-custom-orange">sinhaabhijeet.smith@gmail.com</a> or through this form.</h3>
                        <div className="flex flex-col gap-6">
                        <Input type="email" placeholder="Your Email" onChange={(event)=>{
                            setEmail(event.target.value)
                        }} value={email} required />
                        <Textarea className="h-[200px]" placeholder="Type your message here." onChange={(event)=>{
                            setMessage(event.target.value)
                        }} value={message} required></Textarea>
                        <div className="flex justify-center items-center sm:block">
                        <Button size={"sm"} variant={"orange"} disabled={loading} onClick={handleClick}>{loading? "Sending Message" : "Send Message"}</Button>
                        </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}