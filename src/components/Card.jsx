import React from "react";
import Hello2 from "./Hello2";
import Hello3 from "./Hello3";
// import "../App.css";

function Card() {
  return (
    <div className="Card">
      <h1>CREDIT CARD</h1>
      <Hello3 />
      <h2 className="code">7253 3256 7895 1245</h2>
      <div className="type">
        <h2>
          5422
          <br />
          CARDHOLDER
        </h2>
      </div>
      <div className="information">
        <p>
          VALID <br />
          THRU
        </p>
        </div>
        <div className="age">
        <p>
          MONTH/YEAR
          <br />
          <h2>11/50</h2>
        </p>
        </div>
        <div className="logomaster">
          <Hello2 />
          </div>
    </div>
  );
}

export default Card;
