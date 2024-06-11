import { FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa6";

interface IconProps{
    size: string,
    padding: string,
}
class IconFactory{
    public static Whatsapp({size, padding}:IconProps):React.ReactNode{
        return(
            <>
                <FaWhatsapp className={`${size} ${padding} bg-green-600 rounded-full hover:bg-white hover:text-green-600 duration-300'`} />
            </>
        )
    }
    public static GitHub({size, padding}:IconProps):React.ReactNode{
        return(
            <>
                <FaGithub className={`${size} ${padding} bg-purple-900 rounded-full hover:bg-white hover:text-purple-900 duration-300`} />
            </>
        )
    }
    public static Facebook({size, padding}:IconProps):React.ReactNode{
        return(
            <>
                <FaFacebook className={`${size} ${padding} bg-blue-600 rounded-full hover:bg-white hover:text-blue-600 duration-300`} />
            </>
        )
    }
}

export default IconFactory;