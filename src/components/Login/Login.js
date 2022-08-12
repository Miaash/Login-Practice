import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

 
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=> {
    console.log("유효성검사중...")
    const identifier = setTimeout(()=>{
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
    }, 500)

    // 클린업 함수를 통해 다음 키가 입력되면 이전 타이머를 삭제하고 타이머를 계속해서 한번에 하나씩만 실행되도록 함.
    return () => {
      console.log("Clean up");
      clearTimeout(identifier);
    }
  }, [enteredEmail, enteredPassword])



  // 이메일을 입력했을 때
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // 패스워드를 입력했을 때
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // 이메일 인풋 바깥 영역을 클릭했을 때
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  }

  // 패스워드 인풋 바깥 영역을 클릭했을 때
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  // 로그인 버튼을 눌렀을 때
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          {/* onBlur이벤트는 엘리먼트에서 포커스가 사라졌을 때 호출됨-> 유저가 인풋 바깥영역을 클릭했을 때 호출. */}
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          {/* 버튼 컴포넌트에 props로 disabled를 전달해줘야함 */}
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
