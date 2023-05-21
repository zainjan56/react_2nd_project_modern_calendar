import React from "react";
import "./Show.css";
import { SunriseFill } from "react-bootstrap-icons";
import { SunsetFill } from "react-bootstrap-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import Main from "./Main";

const Show = (props) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div>
      <Main />
      <br></br>
      {props.onSave.map((expense) => (
        <div className="container">
          <div className="searchResult">
            <h1 id="today">Today</h1>
            <p id="date">{date}</p>

            <div className="row">
              <div className="col-sm-6">
                <div className="sunRise">
                  <h1 className="sun1">Sunrise</h1>
                  <SunriseFill size={60} className="sunicon1" />
                  <h2 className="sun1">{expense.sunRise}</h2>
                  <p className="sun1" id="dawn">
                    dawn: {expense.sundown}
                  </p>
                  <p className="sun1" id="para1">
                    Sunrise today in {expense.place}: {expense.sunRise}.
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="sunSet">
                  <h1 className="sun1">Sunset</h1>
                  <SunsetFill size={60} className="sunicon1" />
                  <h2 className="sun1">{expense.sunSet}</h2>
                  <p className="sun1" id="dawn">
                    dusk: {expense.Dusk}
                  </p>
                  <p className="sun1" id="para1">
                    Sunset today in {expense.place}: {expense.sunSet}.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      ))}
      <footer className="footer">
        <div className="row">
          <div className="col-sm-12">
            <div className="details">
              <h4>zainjan@.com</h4>
              <ul>
                <i>Home</i>
                <i>About</i>
                <i>Blog</i>
                <i>Contact</i>
              </ul>
              <ul className="media">
                <i>
                  <BsLinkedin size={15} />
                </i>
                <i>
                  <FaFacebook size={15} />
                </i>
                <i>
                  <AiFillTwitterCircle size={15} />
                </i>
                <i>
                  <GrInstagram size={15} />
                </i>
              </ul>
              <p>Copyright @2023| All rights are reserved| Zainjan</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Show;
