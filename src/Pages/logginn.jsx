import React, { useState } from "react";

function loggInn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  function onClick() {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    if ((username, password === undefined)) {
      document.getElementById("error").innerHTML =
        "Skriv inn brukernavn og passord";
    } else {
      window.location.href = "/brukerside";
    }
  }

  return (
    <div id="page">
      <div id="title">
        <h1>Logg inn</h1>
      </div>

      <div id="skjema">
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={onClick}>
          sende inn
        </button>
        <h1 id="error"></h1>
      </div>
    </div>
  );
}
export default loggInn;
