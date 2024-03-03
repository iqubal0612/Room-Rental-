import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Gachibowli</span>
          {/* <span className="secondaryText">Manuu-500032</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
