import React from "react";
import { text } from "../../locale/ko-KR";
import MainTitle from "../common/MainTitle";
import MenuButton from "../menu/MenuButton";
import styles from "./StartWizzroom.module.css";

function StartWizzroom({ scrollToId }) {
  const icon = <i className="far fa-object-group"></i>;
  const icon2 = <i className="fal fa-download"></i>;

  const onClick = () => {
    window.location.href =
      "https://chrome.google.com/webstore/detail/metastream-remote/fakegmdomhmegokfomgmkbopjibonfcp/related";
  };

  const handelonClick = () => {
    localStorage.getItem("token") !== null
      ? (window.location.href = `http://localhost:8080/#/room/`)
      : alert(`${text.loggingInWithWizzney}`);
  };

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <div className={styles.contentBox}>
        {/* eslint-disable-next-line */}
        <img src="./image/bg.png" />
        <div className={styles.content}>
          <MainTitle title={text.startTitl} subTitle={text.startText} />
          <img src="./image/startImg.png" alt="" />
          <div className={styles.buttons}>
            <MenuButton
              icon={icon}
              menuName={text.make}
              onClick={handelonClick}
            />
            <MenuButton
              icon={icon2}
              menuName={text.download}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartWizzroom;
