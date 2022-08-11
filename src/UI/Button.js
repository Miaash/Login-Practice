import classes from "./Button.module.css";

const Button = (props) => {
    return(
            <button 
            className={`${classes.button} ${props.classes}`}
            onClick={props.onClick}
            type={'button' || props.type}>
                {props.children}
            </button>
    )
}

export default Button;