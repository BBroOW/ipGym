import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import heropage from ".././assets/heropage.avif";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div id="page">
      <div id="title">
        <h1>Ditt Valg for en Sunnere Fremtid</h1>
      </div>

      <div id="info-text">
        <p>
          Utforsk en verden av helse og velvære<br></br>
          med Ingvild Pettersons Treningssenter. <br></br>
          Vi er stolte av å tilby deg det beste innen trening,<br></br>
          personlig veiledning og medlemskap.{" "}
        </p>

        <button>
          <p>Start nå</p>
        </button>
      </div>
    </div>
  );
}
export default Booking;
