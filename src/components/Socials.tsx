import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type SocialsProps = {
    iconstyles: string;
  };
  

export function Socials({iconstyles}: SocialsProps){
    return(
        <div className="flex gap-6">
        <Link to={""} className={iconstyles}><FaGithub></FaGithub></Link>
        <Link to={""} className={iconstyles}><FaLinkedin></FaLinkedin></Link>
        <Link to={""} className={iconstyles}><FaTwitter></FaTwitter></Link>
        <Link to={""} className={iconstyles}><SiLeetcode></SiLeetcode></Link>
        </div>
    )
}