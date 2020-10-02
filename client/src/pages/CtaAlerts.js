
import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import Axios from "axios";
// import { List, ListItem } from "../components/List";
// import { ColorInput, CategoryInput, Input, TextArea, FormBtn, FilterTrains } from "../components/Form";
import "../assets/css/loader.css";
import "../assets/css/sizing.css";

//css for alerts gradient comes from Grid css page for some reason

let ctaRoutes = [];

function ctaAlerts() {
  // Setting our component's initial state
  const [ctaAlerts, setCtaAlerts] = useState([])


  // Load all alerts and store them with setAlerts
  useEffect(() => {
    loadCtaAlerts()
  }, [])


  // Loads all alerts and sets them to alerts
  function loadCtaAlerts() {
    Axios.get('https://www.transitchicago.com/api/1.0/routes.aspx?outputType=JSON')
      .then(res => {
        // console.log(res.data.CTARoutes.RouteInfo)
        let ctaData = res.data.CTARoutes.RouteInfo.slice([0], [9]);

        ctaRoutes = ctaData.map(item => {
          return {
            Route: item.Route,
            Status: item.RouteStatus
          }
        });
        console.log(ctaRoutes);
        setCtaAlerts(ctaRoutes);
      })
  };


  return (
    <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="display-1 sizeH">CTA Status Alerts</h1>
          <div className="sizeFS">Click the line color to view the status for that line.</div>

        </div>
          {ctaAlerts.length ? (
              ctaAlerts.map(ctaRoute => (
                <div key={ctaRoute.Route} className={ctaRoute.Status + " d-flex h-100 align-items-center justify-content-between p-2 m-4 rounded"}>
                  <div className=" display-4 p-3">{ctaRoute.Status}</div>
                  <a alt="Official CTA Alerts Webpage" title="Official CTA Alerts Webpage" href="https://www.transitchicago.com/travel-information/railstatus/" 
                    className={ctaRoute.Route + " rounded display-4 m-2"}>{'\u00A0 \u00A0 \u00A0'}
                  </a>
                </div>
              ))
          ):(
              <>
                <div className="loader">
                  <span className=" cube"></span>
                  <span className=" cube"></span>
                  <span className=" cube"></span>
                  <span className=" cube"></span>
                </div>
              </>
            )}
    </div>
  )
}


export default ctaAlerts;