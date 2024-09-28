import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserLogin() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:300/api/',{email, password});
            if(response.data.success){
                console.log("Login successful");
            }else{
                console.error("Error Occured");
            }
        }catch(error){
            console.error(error);
        }
    }


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>

        <div className="form-links">
          <p>
            Don't have an account?{" "}
            <Link to="/UserSignup">Create an account</Link>
          </p>
          <p>Or</p>
          <a href="/google-signin" className="google-signin">
            Sign in with Google
          </a>
        </div>
      </form>
    </div>
  );
}
export default UserLogin;
