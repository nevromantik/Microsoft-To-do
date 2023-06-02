import React from "react";
import logo from "../../Assets/Microsoft-Logo-650x366.png";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import uniqid from "uniqid";
import axios from "axios";
import logstyle from '../../Pages/Login/login.module.css';
import { useNavigate } from "react-router-dom";
function SignUp({ setLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullName] = useState("");
  const { allUsers, setCurrentUser, currentUser } = useContext(AppContext);
  const handleCreateUser = () => {
   
      const newUser = {
        id: uniqid(),
        fullname: fullname,
        email: email,
        password: password,
        todos: [],
      };
      axios
        .post("http://localhost:3000/users", newUser)
        .then((response) => console.log(response.data));
        axios
        .post("http://localhost:3000/currentUser", newUser)
        .then((response) => setCurrentUser(response.data));
        navigate('/dashboard')
  };
  return (
    <div className={logstyle.login}>
      <div className={logstyle.logowrap}>
        <img src={logo} alt="logo" />
      </div>
      <h1>Create a new account</h1>
      <form
        onSubmit={(e) => {
            e.preventDefault()
          handleCreateUser();
        }}
      >
        <div className={logstyle.inputlogbox}>
          <input
            type="text"
            placeholder="Fullname"
            onChange={(e) => setfullName(e.target.value)}
          />
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

        <div>
          <div className={logstyle.inputbtnbox}>
            <button type="submit">
              log in!
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default SignUp;
