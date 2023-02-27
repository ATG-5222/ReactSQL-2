import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev=>({...prev,[e.target.name]:e.target.value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register",inputs);
            navigate("/login");
        } catch(err){
            setError(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" 
                name="username" 
                placeholder="username" onChange={handleChange}/>
                <input required type="email" 
                name="email" 
                placeholder="email" onChange={handleChange}/>
                <input required type="password" 
                name="password" 
                placeholder="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>
                    Log In
                </button>
                {err && <p>{err}</p>}
                <span>
                    Do you have an account? 
                    <Link to="/login">Log In</Link>
                </span>
            </form>
        </div>
    )
}