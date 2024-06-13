import '../styles/space_button.css';
import '../styles/blank_button.css';
import React from 'react';

interface ButtonProps{
    text:string,
    size:string,
    margin:string
}

class ButtonFactory{
    public static SpaceButton({text, size, margin}:ButtonProps):React.ReactNode{
        return(
            <button className={`btn-space ${size} ${margin}`} type="button">
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

    public static BlankButton({text,size,margin}:ButtonProps):React.ReactNode{
        return(
            <button className={`button-blank type1 ${size} ${margin}`}>
                <span className="btn-blank-txt">{text}</span>
            </button>
        )
    }
}

export default ButtonFactory;