import React from "react";
import "../pages/css/nav.css"

export default function NavBar() {
  return (
    <>
      <div className="left-container">
        <div className="left-nav">
          <i className="fa-sharp fa-solid fa-bars" id="bars"></i>
        </div>
      </div>
      <div className="aux right">
        <div className="right-nav">
          <div></div>
          <a id="instagram" className="fab fa-instagram"></a>
          <a id="facebook" className="fab fa-facebook"></a>
          <a id="youtube" className="fab fa-youtube"></a>
          <a id="linkedin" className="fab fa-linkedin"></a>
        </div>
      </div>
    </>
  );
}
