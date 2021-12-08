import React from "react";
import styles from "./MenuButton.module.css";

interface stateProps {
  menuName?: string | undefined;
  icon?: string | undefined;
}

const MenuButton: React.SFC<stateProps> = ({ menuName, icon }) => {
  const onClick = () => {
    if (menuName === "로그인") {
      window.location.href = "https://www.wizzney.com/login";
      // 로그인 확인 후 마이페이지 버튼으로 변경
    }
  };

  return (
    <button className={styles.container} onClick={onClick}>
      <span>{icon === "" ? "" : icon}</span> {menuName}
    </button>
  );
};

export default MenuButton;
