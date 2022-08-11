import React, {useState} from 'react'
import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {  
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassWord, setEnteredPassWord] = useState('');

    const enteredEmailHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const enteredPasswordHandler = (e) => {
        setEnteredPassWord(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(enteredEmail, enteredPassWord);
        
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <Card className={classes.login}>
                    <div className={classes.control}>
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="text" 
                        id="email" 
                        value={enteredEmail}
                        placeholder="Enter your E-mail"
                        onChange={enteredEmailHandler}></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        value={enteredPassWord}
                        placeholder="Enter your Password"
                        onChange={enteredPasswordHandler}></input>
                    </div>
                   <Button type="submit" className={classes.btn}>Login!</Button>
                </Card>
            </form>
        </>
    )
}

export default Login;