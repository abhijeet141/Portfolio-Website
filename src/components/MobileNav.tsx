import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

export function MobileNav(){
    const [activeLink, setActiveLink] = useState('');
    const handleLink = (link: string) =>{
        setActiveLink(link);
    }
    return(
        <Sheet>
           <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-custom-orange'>
                </CiMenuFries>
            </SheetTrigger> 
            <SheetContent className='flex flex-col'>
            <Link to={'/'} onClick={()=>{
            handleLink('/');
        }} className={`${activeLink === '/' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Home
        </Link>
        <Link to={'/about'} onClick={()=>{
            handleLink('/about');
        }} className={`${activeLink === '/about' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            About
        </Link>
        <Link to={'/projects'} onClick={()=>{
            handleLink('/projects');
        }} className={`${activeLink === '/projects' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Projects
        </Link>
        <Link to={'/skills'} onClick={()=>{
            handleLink('/skills');
        }} className={`${activeLink === '/skills' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Skills
        </Link>
        <Link to={'/experience'} onClick={()=>{
            handleLink('/experience');
        }} className={`${activeLink === '/experience' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Experience
        </Link>
        <Link to={'/resume'} onClick={()=>{
            handleLink('/resume');
        }} className={`${activeLink === '/resume' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Resume
        </Link>
        <Link to={'/contact'} onClick={()=>{
            handleLink('/contact');
        }} className={`${activeLink === '/contact' ? 'text-custom-orange border-b-2 border-black' : 'text-black'} capitalize font-medium transition-all`}>
            Contact
        </Link>
            </SheetContent>
        </Sheet>
    )
}