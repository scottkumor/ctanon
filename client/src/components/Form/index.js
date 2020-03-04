import React from "react";
import axios from "axios";

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
    <select {...props} defaultValue="default" id="line" className="form-control" onChange={FilterTrains} >
      <option value="default">Choose Rail line Color...</option>
      <option id="Red" value="Red">Red</option>
      <option id="Blue" value="Blue">Blue</option>
      <option id="Brn" value="Brn">Brown</option>
      <option id="G" value="G">Green</option>
      <option id="Org" value="Org">Orange</option>
      <option id="P" value="P">Purple</option>
      <option id="Pexp" value="Pexp">Purple Express</option>
      <option id="Pink" value="Pink">Pink</option>
      <option id="Y" value="Y">Yellow</option>
    </select>
  );
}

//CTA API call to get all train color information
export function FilterTrains(e) {
  axios.get(`http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=f1e50ffc99634da4a135da024e8fc024&rt=${e.target.value}&outputType=JSON`)
  .then(res => {
    const trains = res.data;
    console.log(trains);
  })
}


export function CategoryInput(props) {
  return (
    <select {...props} defaultValue="default" id="category" className="form-control">
        <option value="default" > Choose an Incident Category...</option>
      <option className="" id="" data-val="threat">Verbal or physical threat(s)</option>
      <option className="" id="" data-val="inAppTouch">Inappropriate touching</option>
      <option className="" id="" data-val="indExp">Indecent exposure</option>
      <option className="" id="" data-val="sexAdv">Sexual advances</option>
      <option className="" id="" data-val="inAppPic">Inappropriate photographing/filming</option>
      <option className="" id="" data-val="tooClose">Unwelcomed physical proximity</option>
      <option className="" id="" data-val="comment">Inappropriate or sexual comments</option>
      <option className="" id="" data-val="susAct">Suspicious Activity</option>
      <option className="" id="" data-val="obsGest">Obscene gestures</option>
      <option className="" id="" data-val="delayTrain">Delayed Train</option>
      <option className="" id="" data-val="passInc">Passenger Incident</option>
      <option className="" id="" data-val="polAct">Police Activity</option>
      <option className="" id="" data-val="John Wayne Gacy's Ghost">John Wayne Gacy's Ghost</option>
      <option className="" id="" data-val="Other">Other</option>
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
      <textarea className="form-control" id="description" rows="3" maxLength="140" spellCheck="default" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <>
    <button {...props} type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
      
    </button>
    </>
  );
}
