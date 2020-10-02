import React
 //,{ useState }
  from "react";
import './style.css'
import axios from "axios";
//import stopsDB from "../../assets/data/stops.json"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


//CTA API call to get all train color information
export function FilterTrains(e) {
  // e.preventDefault();
  axios.get(`https://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=f1e50ffc99634da4a135da024e8fc024&rt=${e}&outputType=JSON`)
  .then(res => {
    //this is every train of the chosen color displayed in arrays
    const trains = res.data.ctatt.route[0].train || "There are no trains here.";
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
        <option value="default" > Category...</option>
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
