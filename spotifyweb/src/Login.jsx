import React from "react";
import MediaQuery from "react-responsive";
import "./Login.css";

function Login() {
  return (
    <MediaQuery minWidth={412}>
      <div className="Bungkus">
        <img
          className="background"
          src="https://wallpaperaccess.com/full/880901.png"
          alt="background"
        />
        <div className="login">
          <h2>Sign In</h2>
          <form className="inputBox">
            <input className="data" type="text" placeholder="Username" />
          </form>
          <form className="inputBox">
            <input className="data" type="password" placeholder="Password" />
          </form>
          <form className="inputBox">
            <input type="submit" value="Login" className="btn" />
          </form>
          <div className="group">
            <a href="#">Forget Password</a>
            <a href="3">Sign Up</a>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}

export default Login;
