import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username"/>
                <input required type="email" placeholder="email"/>
                <input required type="password" placeholder="password"/>
                <button>Log In</button>
                <p>This is an error</p>
                <span>
                    Do you have an account? 
                    <Link to="/login">Log In</Link>
                </span>
            </form>
        </div>
    )
}