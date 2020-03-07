
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { ColorInput, CategoryInput, Input, TextArea, FormBtn, FilterTrains } from "../components/Form";

function Submit() {
  // Setting our component's initial state
  const [alerts, setAlerts] = useState([])
  const [line, setLine] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');

  // Load all alerts and store them with setAlerts
  useEffect(() => {
    loadAlerts()
  }, [])


  // Loads all alerts and sets them to alerts
  function loadAlerts() {
    API.getAlerts()
      .then(res =>
        setAlerts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a alert from the database with a given id, then reloads alerts from the db
  function deleteAlert(id) {
    API.deleteAlert(id)
      .then(res => loadAlerts())
      .catch(err => console.log(err));
  };

  function handleColorInput() {
    let v = document.getElementById("line").value;
    setLine(v);
    if (v === "Brown") {
      FilterTrains("Brn");
    }
    else if (v === "Green") {
      FilterTrains("G");
    }
    else if (v === "Orange") {
      FilterTrains("Org");
    }
    else if (v === "Purple") {
      FilterTrains("P");
    }
    else if (v === "Purple Express") {
      FilterTrains("Pexp");
    }
    else if (v === "Yellow") {
      FilterTrains("Y");
    }
    else if (v === "") {
      // do nothing if they re-select the default text
    }
    else {
      FilterTrains(v);
    }
  };


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log("form click works!!");
    console.log(line);
    console.log(category);
    console.log(desc);

    //if (formObject.color && formObject.category) { i took this out to prevent requiring data -DDD
    API.saveAlert({
      line: line,
      category: category,
      description: desc,
      votes: 0,
      voted: false,
      cleared: 0,
      hidden: false,
      dateTime: moment().format("YYYYMMDDHHmmss")
    })
      .then(res => loadAlerts())
      .catch(err => console.log(err));
    //}
  };

  
  return (
    <Container>
      <Row classInfo="row">
        <Col classInfo="col-md-6">
          <h1 className="">Tell Chicago what's happening.</h1>

          <form>
            <ColorInput
              name="line"
              onChange={() => handleColorInput()}
            />

            <CategoryInput
              name="category"
              onChange={() => setCategory(document.getElementById("category").value)}
            />

            <TextArea
              name="description"
              placeholder="Describe what's going on here. Max 140 characters."
              onChange={() => setDesc(document.getElementById("description").value)}
            />

            <FormBtn onClick={() => handleFormSubmit()}>
              Submit Alert
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Submit;