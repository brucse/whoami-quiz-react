import React from "react";
import styles from "./VerticalMenu.module.css";

const VerticalMenu = (props) => {
  return (
    <div className={styles.verticalMenuContainer}>
      <ul className={styles.ul}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default VerticalMenu;
