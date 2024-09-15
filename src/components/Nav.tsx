import { useState } from "react";
import { Link } from "react-router-dom"

export function Nav(){
    const [activeLink, setActiveLink] = useState('');
    const handleLink = (link: string) =>{
        setActiveLink(link);
    }
    return(
       <nav className="flex gap-8">
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
       </nav>
    )
}