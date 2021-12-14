import React from "react";
import styles from "./MenuButton.module.css";

interface stateProps {
  menuName: string;
  icon?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const MenuButton: React.SFC<stateProps> = ({ menuName, icon, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <span>{icon === "" ? "" : icon}</span> {menuName}
    </button>
  );
};

export default MenuButton;
