
import React, { useState } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import stopsDB from "../assets/data/stops.json"
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { FilterTrains, CategoryInput, TextArea, FormBtn } from "../components/Form";
import "../assets/css/sizing.css";

function Submit() {
  // Setting our component's initial state
  // const [alerts, setAlerts] = useState([])

  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [stops, setStops] = useState([]);
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedStop, setSelectedStop] = useState("");
  const moment = require("moment");

  // //Load all alerts and store them with setAlerts
  // useEffect(() => {
  //   loadAlerts()
  // }, [])


  // // Loads all alerts and sets them to alerts
  // function loadAlerts() {
  //   API.getAlerts()
  //     .then(res =>
  //       setAlerts(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a alert from the database with a given id, then reloads alerts from the db
  // function deleteAlert(id) {
  //   API.deleteAlert(id)
  //     .then(res => loadAlerts())
  //     .catch(err => console.log(err));
  // };


  const lines = {
    y: "Yellow",
    pexp: "Purple Express",
    g: "Green",
    red: "Red",
    blue: "Blue",
    o: "Orange",
    p: "Purple",
    pnk: "Pink",
    brn: "Brown"
  };

  const lineList = Object.values(lines).map(value => ({
    name: value
  }));

  function handleLineSelect(e) {
    console.log("Selected line", e.target.value);
    let colorSel = e.target.value;
    let lineSel = "";


    if (colorSel === "Yellow") {
      lineSel = "y";
      FilterTrains(lineSel);
    }
    if (colorSel === "Purple Express") {
      lineSel = "pexp";
      FilterTrains("p"); //cta api did not have pexp, using purple instead
    }
    if (colorSel === "Green") {
      lineSel = "g";
      FilterTrains(lineSel);
    }
    if (colorSel === "Red") {
      lineSel = "red";
      FilterTrains(lineSel);
    }
    if (colorSel === "Blue") {
      lineSel = "blue";
      FilterTrains(lineSel);
    }
    if (colorSel === "Orange") {
      lineSel = "org";
      FilterTrains(lineSel);
    }
    if (colorSel === "Purple") {
      lineSel = "p";
      FilterTrains(lineSel);
    }
    if (colorSel === "Pink") {
      lineSel = "pnk";
      FilterTrains(lineSel);
    }
    if (colorSel === "Brown") {
      lineSel = "brn";
      FilterTrains(lineSel);
    }


    let stopOptions = [];

    for (let i = 0; i < stopsDB.length; i++) {
      let checker = stopsDB[i][lineSel]

      if (checker === true) {
        if (stopOptions.indexOf(stopsDB[i].station_name) === -1) {
          stopOptions.push(stopsDB[i].station_name)
        }
      }

    }


    setSelectedLine(colorSel);
    setStops(stopOptions);
    setSelectedStop("");
  }

  function handleStopSelect(e) {
    console.log("Selected stop", e.target.value);
    const stopOptions = e.target.value;
    setSelectedStop(stopOptions);
  }

  function handleFormSubmit() {
    //if (formObject.color && formObject.category) { i took this out to prevent requiring data -DDD
    API.saveAlert({
      line: selectedLine,
      station: selectedStop,
      category: category,
      description: desc,
      votes: 0,
      voted: false,
      cleared: 0,
      hidden: false,
      dateTime: moment().format("YYYYMMDDHHmmss")
    })
      .catch(err => console.log(err));
    //}
  };


  return (

    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-4 sizeH">Tell Chicago what's happening.</h1>
      <h1 className="sizeFS">We need the Line, Stop, and Category of the ongoing situation.</h1>


      <form className="selectContainer">
        <div className="d-flex">
          <select 
            name="Lines"
            className="form-control"
            onChange={e => handleLineSelect(e)}
            value={selectedLine}
          >
            <option value="">Line...</option>
            {lineList.map((line, key) => (
              <option key={key} value={line.name}>
                {line.name}
              </option>
            ))}
          </select>

          <select
            name="Stops"
            className="form-control"
            onChange={e => handleStopSelect(e)}
            value={selectedStop}
          >
            <option value="">Stop...</option>
            {stops.map((stop, key) => (
              <option key={key} value={stop}>
                {stop}
              </option>
            ))}
          </select>

          <CategoryInput
            name="Categories"
            onChange={() => setCategory(document.getElementById("category").value)}
          />
        </div>

        <TextArea
          name="description"
          placeholder="Describe what's going on here. Max 140 characters."
          onChange={() => setDesc(document.getElementById("description").value)}
        />

        <FormBtn onClick={() => handleFormSubmit()}>
          Submit Alert
        </FormBtn>
      </form>
    </div>
  )
}

export default Submit;