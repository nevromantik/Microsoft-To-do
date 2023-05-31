import React from "react";
import logstyle from "../../Pages/Login/login.module.css";
import logo from "../../Assets/Microsoft-Logo-650x366.png";
function SignUp({ setLogin }) {
  return (
    <div className={logstyle.login}>
      <div className={logstyle.logowrap}>
        <img src={logo} alt="logo" />
      </div>
      <h1>Create a new account</h1>
      <form>
        <div className={logstyle.inputlogbox}>
          <input type="text" placeholder="Fullname" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <div>
          <div className={logstyle.inputbtnbox}>
            <button onClick={() => setLogin(true)}>Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
