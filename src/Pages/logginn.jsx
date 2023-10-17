import React, { useState } from "react";

function loggInn() {
  const [username, setBrukerNavn] = useState();
  const [Passord, setPassord] = useState();
  function onClick() {
    localStorage.setItem("username", username);
    localStorage.setItem("Passord", Passord);
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
          onChange={(e) => setBrukerNavn(e.target.value)}
        />
        <input
          placeholder="Passord"
          value={Passord}
          onChange={(e) => setPassord(e.target.value)}
        />
        <button type="button" onClick={onClick}>
          sende inn
        </button>
      </div>
    </div>
  );
}
export default loggInn;
