import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
export function Navbar(){
    return(
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center border-b-2 pb-4">
                <Link to={"/"}>
                <h1 className="text-4xl font-semibold">
                Abhijeet<span className="text-custom-orange">.</span>
                </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                <Nav></Nav>
                <Link to={'/contact'}>
                <Button className="border-black">Let's Chat</Button>
                </Link>
                </div>
                <div className="xl:hidden">
                    Mobile Nav
                </div>
            </div>
        </header>
    )
}