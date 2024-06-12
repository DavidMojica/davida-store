import '../styles/space_button.css';

interface ButtonProps{
    text:string,
    heigth:string,
    width:string,
    mx:string,
    my:string
}

class ButtonFactory{
    public static SpaceButton({text, heigth, width, mx, my}:ButtonProps):React.ReactNode{
        return(
            <button className={`btn-space ${heigth} ${width} ${mx} ${my}`} type="button">
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