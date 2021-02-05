import React from "react";
import { MenuOutline } from "react-ionicons";

const Header = (props) => {
  return (
    <div className="headerLine">
      <header>
        <div className="logo">logo</div>
        <nav>
          {/* <ion-icon className="i-c" name="menu"></ion-icon> */}
          <MenuOutline className="i-c" height="40px" />
          <ul className="ul-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Create quiz</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
