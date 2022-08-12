import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
    return (
        // header class를 아래와 같이 작성하는 이유는 뭘까-> 예상컨대 아마 클래스 이름에 '-'가 있어서가 아닐까 싶다...
        <header className={classes['main-header']}>
            <h1>Login Page</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
        </header>
    )
}

export default MainHeader;