import classes from "./Navigation.module.css";

const Navigation = (props) => {
    return(
        <nav className={classes.nav}>
            {/* isLoggedIn이 true일때만 보여지게 해야함 */}
            <ul>
                {props.isLoggedIn && <li> <a href="/">Users</a> </li>}
                {props.isLoggedIn && <li> <a href="/">Admin</a> </li>}
                {props.isLoggedIn && <li> <button onClick={props.onLogout}>Logout</button> </li>}
            </ul>
        </nav>
    )
}

export default Navigation;