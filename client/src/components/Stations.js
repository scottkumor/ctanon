import React, { useState } from "react";

export default function StationInput() {
  const [stops, setStops] = useState([]);
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedStop, setSelectedStop] = useState("");

  const lines = {
    Y: ["Dempster-Skokie", "Oakton-Skokie", "Howard"],
    Pexp: ["Howard", "Wilson", "Belmont"],
    G: ["43rd", "47th", "Morgan"]
  };

  const lineList = Object.keys(lines).map(key => ({
    name: key
  }));

  function handleLineSelect(e) {
    console.log("Selected line", e.target.value);
    const lineSel = e.target.value;
    const stopsSel = lineSel !== "" ? lines[lineSel] : "";
    setSelectedLine(lineSel);
    setStops(stopsSel);
    setSelectedStop("");
  }

  function handleStopSelect(e) {
    console.log("Selected stop", e.target.value);
    const stopsSel = e.target.value;
    setSelectedStop(stopsSel);
  }

  return (
    <div className="App">
      <h1>Example DropDown Coutries and stops</h1>

      <div className="Container">
        <select
          name="Lines"
          onChange={e => handleLineSelect(e)}
          value={selectedLine}
        >
          <option value="">Select the Line</option>
          {lineList.map((line, key) => (
            <option key={key} value={line.name}>
              {line.name}
            </option>
          ))}
        </select>

        <select
          name="Stops"
          onChange={e => handleStopSelect(e)}
          value={selectedStop}
        >
          <option value="">Select the stop</option>
          {stops.map((stop, key) => (
            <option key={key} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}