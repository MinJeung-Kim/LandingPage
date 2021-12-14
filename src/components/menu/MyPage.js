import React from "react";
import { text } from "../../locale/ko-KR";
import styles from "./MyPage.module.css";

function MyPage({ info, setInfo }) {
  const onClick = () => {
    localStorage.removeItem("token");
    setInfo(undefined);
  };
  return (
    <div className={styles.myPage}>
      <div className={styles.profile}>
        <img src={`${info?.profile}`} alt="" />
      </div>
      <p className={styles.nick}>{info?.nick}</p>
      <p className={styles.userId}>{info?.userId}</p>
      <button className={styles.logout} onClick={onClick}>
        {text.logout}
      </button>
    </div>
  );
}

export default MyPage;
