import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    const user = { password, email };
    axios
      //LOGIN
      //sent data with post, do a fetch or axios to url of backend
      .post("http://localhost:5005/login", user)
      .then((response) => {
        console.log("login response", response);
        if (response.data.status === "error") {
          alert(response.data.error);
        } else {
          navigate("/HomePage");
        }
      });

    // if (user) {
    //   alert("please cheack your email and password");
    //   navigate("/HomePage");
    // } else {
    //   navigate("/HomePage");
    // }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userName, email, password);
    //RESGISTER
    //sent data with post, do a fetch or axios to url of backend
    //https://www.youtube.com/watch?v=Ejg7es3ba2k&t=1208s
    const user = { userName, password, email };
    axios
      .post("http://localhost:5005/register", user)
      .then((response) => console.log(response));
  };

  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleRegister}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="unser-name"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
