import '../styles/space_button.css';

interface ButtonProps{
    text:string,
    heigth:string,
    width:string,
    mx:string
}

class ButtonFactory{
    public static SpaceButton({text, heigth, width, mx}:ButtonProps):React.ReactNode{
        return(
            <button className={`btn-space ${heigth} ${width} ${mx}`} type="button">
                <strong>{text}</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle-space"></div>
                    <div className="circle-space"></div>
                </div>
            </button>
        )
    }
}

export default ButtonFactory;