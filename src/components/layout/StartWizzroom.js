import React from "react";
import MainTitle from "../common/MainTitle";
import MenuButton from "../menu/MenuButton";
import styles from "./StartWizzroom.module.css";

function StartWizzroom({ scrollToId }) {
  const icon = <i className="far fa-object-group"></i>;
  const icon2 = <i className="fal fa-download"></i>;
  const title = "Start Wizzroom";
  const subTitle = "위즈룸에서 친구들과 함께 컨텐츠를 즐기세요!";
  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <div className={styles.contentBox}>
        {/* eslint-disable-next-line */}
        <img src="./image/bg.png" />
        <div className={styles.content}>
          <MainTitle title={title} subTitle={subTitle} />
          <img src="./image/startImg.png" alt="" />
          <div className={styles.buttons}>
            <MenuButton icon={icon} menuName={"위즈룸 만들기"} />
            <MenuButton icon={icon2} menuName={"위즈룸 다운로드"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartWizzroom;
