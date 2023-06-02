import React, { useEffect } from "react";
import style from '../../Pages/Login/login.module.css'
import logo from "../../Assets/Microsoft-Logo-650x366.png";
import SignUp from './SignUp'
import { AppContext } from "../../App";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { allUsers, setCurrentUser, currentUser } = useContext(AppContext);
  const handleGetUser = () => {
    const userMatch = allUsers.some(
      (user) => user.email === email && user.password === password
    );
    if (userMatch) {
      const selectedUser = allUsers.find(
        (user) => user.email === email && user.password === password
      );
      
      axios.post('http://localhost:3000/currentUser', selectedUser)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response)
      });
     
      navigate("/dashboard")
      
    }
  };

 
  console.log(currentUser, 'current from LOGIN')

 
  return (
    <div className={style.loginbox}>
      {login ? (
        <div className={style.login}>
          <div className={style.logowrap}>
            <img src={logo} alt="logo" />
          </div>
          <h1>Sign in</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleGetUser();
            }}
          >
            <div className={style.inputlogbox}>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p>
              No account?{" "}
              <a href="#" onClick={() => setLogin(false)}>
                Create one!
              </a>
            </p>
            <div>
              <div className={style.inputbtnbox}>
                <button>Login</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <SignUp setLogin={setLogin} />
      )}
    </div>
  );
}

export default Login;
