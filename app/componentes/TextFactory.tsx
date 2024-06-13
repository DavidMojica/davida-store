import gsap from "gsap";
import { useEffect } from "react";
interface TextProps{
    size: string,
    mdsize:string,
    text:string,
    from: string,
    to:string,
    dark_from:string,
    dark_to:string
}

class TextFactory{
    public static RainbowText({size, mdsize, text, from, to, dark_from, dark_to}:TextProps):React.ReactNode{
        return(
            <span className={`rainbow-text animated-text font-bold ${size} md:${mdsize} text-transparent bg-clip-text bg-gradient-to-r ${from} dark:${dark_from} ${to} dark:${dark_to} shadow-around`}>
                {text}
            </span>
        )
    }
}

export default TextFactory;