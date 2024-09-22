import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type SocialsProps = {
    iconstyles: string;
  };
  

export function Socials({iconstyles}: SocialsProps){
    return(
        <div className="flex gap-6">
            <div>
                <a href="https://github.com/abhijeet141" className={iconstyles} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>

            <div className="text-[#007acc]">
                <a href="https://www.linkedin.com/in/abhijeet-sinha264/" className={iconstyles} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>

            <div className="text-[#1DA1F2]">
                <a href="https://x.com/Abhijee64915105" className={iconstyles} target="_blank" rel="noopener noreferrer">
                    <FaTwitter/>
                </a>
            </div>
            <div className="text-[#333333]">
                <a href="https://leetcode.com/u/abhijeet264/" className={iconstyles} target="_blank" rel="noopener noreferrer">
                    <SiLeetcode/>
                </a>   
            </div>  
        </div>
    )
}