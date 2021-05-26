import React, { useEffect, useState } from "react";
import { getCookie } from "../utils";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if(getCookie("jwttoken") !== null) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <center>
        <p>
          Navbar<br/>
          {!loggedIn && (
            <>
              <a href="/login">Login</a> <a href="/register">Register</a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="/logout">Logout</a>
            </>
          )}
        </p>
      </center>
    </div>
  );
}
