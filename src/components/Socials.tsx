import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type SocialsProps = {
    iconstyles: string;
  };
  

export function Socials({iconstyles}: SocialsProps){
    return(
        <div className="flex gap-6">
        <a href="https://github.com/abhijeet141" className={iconstyles} target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abhijeet-sinha264/" className={iconstyles} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://x.com/Abhijee64915105" className={iconstyles} target="_blank" rel="noopener noreferrer">
        <FaTwitter/>
        </a>
        <a href="https://leetcode.com/u/abhijeet264/" className={iconstyles} target="_blank" rel="noopener noreferrer">
        <SiLeetcode/>
        </a>     
        </div>
    )
}