import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Show from "./Show";
import { BrightnessHighFill } from "react-bootstrap-icons";

const Header = () => {
  const [users, setUsers] = useState("");
  const [data, setData] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    setUsers("");

    fetch(`https://nominatim.openstreetmap.org/search?q=${users}&format=json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const lat = data[0].boundingbox[1];
        const long = data[0].boundingbox[3];

        fetch(
          `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&timezone=PKT&date=today`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);

            const allData = {
              sundown: data.results.dawn,
              dayLength: data.results.day_length,
              sunRise: data.results.sunrise,
              sunSet: data.results.sunset,
              Dusk: data.results.dusk,
              id: Math.random(),
              place: users,
            };

            setData([allData]);
          });
      });
  };

  const changeHandler = (e) => {
    setUsers(e.target.value);
  };
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand style={{ color: "white" }} className="title">
            <BrightnessHighFill size={30} color="yellow" /> Sun Times
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <form>
              <input
                type="search"
                onChange={changeHandler}
                value={users}
                placeholder="Enter a location"
                id="inputField"
              />
              <button onClick={clickHandler} id="btn1">
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Show onSave={data} />
    </div>
  );
};

export default Header;
