import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username"/>
                <input required type="password" placeholder="password"/>
                <button>Log In</button>
                <p>This is an error</p>
                <span>
                    Don't you have an account? 
                    <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}