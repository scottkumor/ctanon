import React from "react";

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
    <select {...props} defaultValue="default" id="line" className="form-control" >
      <option value="default">Choose Rail line Color...</option>
      <option id="Red" data-val="Red">Red</option>
      <option id="Blue" data-val="Blue">Blue</option>
      <option id="Brn" data-val="Brn">Brown</option>
      <option id="G" data-val="G">Green</option>
      <option id="Org" data-val="Org">Orange</option>
      <option id="P" data-val="P">Purple</option>
      <option id="Pexp" data-val="Pexp">Purple Express</option>
      <option id="Pink" data-val="Pink">Pink</option>
      <option id="Y" data-val="Y">Yellow</option>
    </select>
  );
}

export function CategoryInput(props) {
  return (
    <select {...props} defaultValue="default" id="category" className="form-control">
        <option value="default" > Choose an Incident Category...</option>
      <option className="" id="" data-val="threat">Verbal or physical threat(s)</option>
      <option className="" id="" data-val="inappTouch">Inappropriate touching</option>
      <option className="" id="" data-val="indExp">Indecent exposure</option>
      <option className="" id="" data-val="sexAdv">Sexual advances</option>
      <option className="" id="" data-val="inappPic">Inappropriate photographing/filming</option>
      <option className="" id="" data-val="tooClose">Unwelcomed physical proximity</option>
      <option className="" id="" data-val="comment">Inappropriate or sexual comments</option>
      <option className="" id="" data-val="obsGest">Obscene gestures</option>
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
