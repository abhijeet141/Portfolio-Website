import  Image  from "../assets/photo.png"
export function Photo(){
    return(
        <div className="w-[250px] h-[299px] pl-4 xl:pl-20 xl:w-[498px] xl:h-[498px]">
        <img src={Image} alt="" className="h-full"/>
        </div>
    )
}