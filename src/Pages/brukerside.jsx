import React, { useState, useEffect } from "react";

function Usersite() {
  // State to keep track of trash count
  const [trashCount, setTrashCount] = useState(() => {
    // Initialize with the value from local storage or default to 0
    return parseInt(localStorage.getItem("trashCount")) || 0;
  });

  // Function to handle button click
  function onClick() {
    // Update the trashCount by adding 1
    const newTrashCount = trashCount + 1;
    setTrashCount(newTrashCount);

    // Store the updated count in local storage
    localStorage.setItem("trashCount", newTrashCount.toString());
  }

  // Use useEffect to update the DOM when the component mounts
  useEffect(() => {
    document.getElementById("søppelenhet").innerHTML = trashCount;
  }, [trashCount]);

  return (
    <div id="page">
      <h1>Antall enheter kastet</h1>
      <button type="button" id="søppelenhet" onClick={onClick}>
        Trykk for å legge til en kilo søppel<p></p>
      </button>
      {/* Display the updated trash count */}
      <div id="title">Trash Count: {trashCount}</div>
    </div>
  );
}

export default Usersite;
