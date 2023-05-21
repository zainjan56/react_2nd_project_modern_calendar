import React from "react";
import "./Main.css";
import imgOne from "../images/cal3.webp";
import MyCalendar from "./MyCalendar";

const Main = () => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-sm-6">
            <img src={imgOne} alt="calender" className="imgMain" />
          </div>

          <div className="col-sm-6">
            <MyCalendar />
          </div>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col">
          <div className="result">
            <h3>Result Of Sun Rising And Set Times Shows Here.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
