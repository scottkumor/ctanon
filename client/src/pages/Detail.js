import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "../assets/css/sizing.css"

function Detail(props) {
  const [alert, setAlert] = useState({})
  const moment = require("moment");


  const { id } = useParams()
  useEffect(() => {
    API.getAlert(id)
      .then(res => setAlert(res.data))
      .catch(err => console.log(err));
  }, [])

  const h2Style = {
    whiteSpace: 'normal'
  };

  return (

    <div className="d-flex flex-column justify-content-center align-items-center">

      <div className="m-3 detailTitle">
      <div className="sizeH">{alert.category}</div>
        <div className="sizeFS">reported on the</div>
        <div className="sizeH">{alert.line} Line</div>
        <div className="sizeFS">approximately {moment(alert.dateTime, "YYYYMMDDHHmmss").fromNow()}</div>
      </div>

      <div className="sizeFS justify-content-center align-items-center mt-5 mb-5" style={h2Style}>
        {alert.description}
      </div>
    
      <Link to="/">← Back</Link>

    </div>
  );
}


export default Detail;
