import React, { useState, useEffect } from "react";
import { sendPost, setCookie, getCookie } from "../utils/index";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

    useEffect(() => {
        if(getCookie("jwttoken")){
            window.location.href="/";
        }
    }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = await sendPost("login", {
      username,
      password,
    });
    if(!response.success){
        seterrorMsg(response.msg);
    } else {
        setCookie("jwttoken", response.token);
        window.location.href = "/";
    }
  };

  return (
    <div>
      <center>
        <h1>Login</h1>
        <h3 style={{color : "red"}}>{errorMsg}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <br />
          <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} id="username" />
          <br /> <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} id="password" /> <br />
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
}
