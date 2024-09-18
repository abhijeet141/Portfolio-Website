import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export function WorkSliderBtns(){
    const swiper = useSwiper();
    return(
        <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-40 z-20 w-full justify-between xl:w-max xl:justify-none">
            <button className="bg-custom-orange hover:bg-red-orange text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" onClick={()=>swiper.slidePrev()}>
                <PiCaretLeftBold className=""></PiCaretLeftBold>
            </button>
            <button className="bg-custom-orange hover:bg-red-orange text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" onClick={()=>swiper.slideNext()}>
                <PiCaretRightBold></PiCaretRightBold>
            </button>
        </div>
    )
}