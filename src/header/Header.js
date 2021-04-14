import React, { useState } from "react";
import { MenuOutline } from "react-ionicons";
import styles from "./Header.module.css";
import VerticalMenu from "./VerticalMenu";

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuOutline = (event) => {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={styles.headerLine}>
      <header>
        <div className={styles.logo}>logo</div>
        <nav>
          {/* <ion-icon className="i-c" name="menu"></ion-icon> */}
          <MenuOutline
            className="i-c"
            height="40px"
            onClick={handleMenuOutline}
          />
          <ul className={styles.ul}>
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
      {mobileMenu ? <VerticalMenu /> : null}
    </div>
  );
};

export default Header;
