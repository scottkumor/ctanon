import React, { useState } from "react";
import './style.css'
import axios from "axios";
import stopsDB from "../../assets/data/stops.json"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function ColorInput(props) {
  return (
    <select {...props} defaultValue="default" id="line" className="form-control">
      <option data-val="default" value="">Choose a Line...</option>
      <option id="Red" data-val="red">Red</option>
      <option id="Blue" data-val="blue">Blue</option>
      <option id="Brn" data-val="brn">Brown</option>
      <option id="G" data-val="g">Green</option>
      <option id="Org" data-val="o">Orange</option>
      <option id="P" data-val="p">Purple</option>
      <option id="Pexp" data-val="pexp">Purple Express</option>
      <option id="Pink" data-val="pnk">Pink</option>
      <option id="Y" data-val="y">Yellow</option>
    </select>
  );
}

export function StationInput (props) {
  const [stops, setStops] = useState([]);
  const [selectedLine, setSelectedLine] = useState("");
  const [selectedStop, setSelectedStop] = useState("");

  const lines = {
    y: [stops],
    pexp: [stops],
    g: [stops],
    red: [stops],
    blue: [stops],
    o: [stops],
    p: [stops],
    pnk: [stops],
    brn: [stops]
  };

  const lineList = Object.keys(lines).map(key => ({
    name: key
  }));

  function handleLineSelect(e) {
    console.log("Selected line", e.target.value);
    let lineSel = e.target.value;
    // const stopsSel = lineSel !== "" ? lines[lineSel] : "";
    let stopsSel = [];

    for( let i=0; i<stopsDB.length; i++) {
      let checker = stopsDB[i][lineSel]

      if (checker === true){
        if (stopsSel.indexOf(stopsDB[i].station_name) === -1) {
          stopsSel.push(stopsDB[i].station_name)
        } 
      }
    
    }
    //console.log(stopsSel)

    
    setSelectedLine(lineSel);
    setStops(stopsSel);
    setSelectedStop("");
  }

  // function handleStopSelect(e) {
  //   console.log("Selected stop", e.target.value);
  //   const stopsSel = e.target.value;
  //   setSelectedStop(stopsSel);
  // }

  return (
    
      <div className="Container">    
        <select {...props}
          name="Lines"
          onChange={e => handleLineSelect(e)}
          value={selectedLine}
        >
          <option value="">Choose a Line...</option>
          {lineList.map((line, key) => (
            <option key={key} value={line.name}>
              {line.name}
            </option>
          ))}
        </select>

        <select
          name="Stops"
          //onChange={e => handleStopSelect(e)}
          //value={selectedStop}
        >
          <option value="">Select the stop</option>
          {stops.map((stop, key) => (
            <option key={key} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
  );
  //   return (
  //   <select {...props} defaultValue="default" id="station" className="form-control">
  //     <option data-val="default" value="">Choose a Stop...</option>
  //   </select>
    
  // )
}

//CTA API call to get all train color information
export function FilterTrains(e) {
  // e.preventDefault();
  axios.get(`https://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=f1e50ffc99634da4a135da024e8fc024&rt=${e}&outputType=JSON`)
  .then(res => {
    //this is every train of the chosen color displayed in arrays
    const trains = res.data.ctatt.route[0].train;
    //loop through data and pull out trDr 
    //(1 if Howard/O'Hare/Kimball/Harlem/Loop/Linden/Skokie bound
    //2 if 95th/Forest Park/Loop[brn]/Ashland/Midway/Loop[prpl]/54th bound)
    //loop through data and pull nextStaNm    
    console.log(trains);
  })
}


export function CategoryInput(props) {
  return (
    <select {...props} defaultValue="default" id="category" className="form-control">
        <option value="default" > Choose a Category...</option>
      <option className="" id="" data-val="threat">Verbal or Physical Threat(s)</option>
      <option className="" id="" data-val="inAppTouch">Inappropriate Touching</option>
      <option className="" id="" data-val="indExp">Indecent Exposure</option>
      <option className="" id="" data-val="sexAdv">Sexual Advances</option>
      <option className="" id="" data-val="inAppPic">Inappropriate Photographing/Filming</option>
      <option className="" id="" data-val="tooClose">Unwelcomed Physical Proximity</option>
      <option className="" id="" data-val="comment">Inappropriate or Sexual Comments</option>
      <option className="" id="" data-val="susAct">Suspicious Activity</option>
      <option className="" id="" data-val="obsGest">Obscene gestures</option>
      <option className="" id="" data-val="delayTrain">Delayed Train</option>
      <option className="" id="" data-val="passInc">Passenger Incident</option>
      <option className="" id="" data-val="polAct">Police Activity</option>
      <option className="" id="" data-val="nonTheat">Non-Threatening Incident(s)</option>
      <option className="" id="" data-val="distPeace">Disturbance of Peace</option>
    </select>
  );
}


// export function FileInput(props) {
//   return (
//     <div className="form-group">
//       <input type="file" class="form-control-file"  id="file" {...props}/>
//     </div>
//   )
// };
// add FileInput to imports in Alert.js in pages folder

export function TextArea(props) {
  return (
    <div name="description" className="form-group">
      <textarea className="form-control" id="description" rows="5" maxLength="140"  spellCheck="default" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <>
    <a {...props} href="/" type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
      
    </a>
    </>
  );
}
