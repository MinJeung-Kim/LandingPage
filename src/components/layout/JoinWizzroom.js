import React from "react";
import MainTitle from "../common/MainTitle";
import MenuButton from "../menu/MenuButton";
import styles from "./JoinWizzroom.module.css";

function JoinWizzroom({ scrollToId }) {
  const title = "Join a Wizzroom";
  const subTitle = "위즈룸에 참여 해보세요!";
  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={title} subTitle={subTitle} />
      <div className={styles.contentBox}>
        <div className={styles.preBtn}>이전</div>
        <div className={styles.gridBox}>
          {/* room */}
          <div className={styles.room}>
            <div className={styles.stateBar}>
              <div className={styles.profileBox}>
                <div className={styles.profile}></div>
                <span className={styles.nick}>졔졔</span>
              </div>
              <div className={styles.conditionBox}>
                <span className={styles.icon}>
                  <i className="fas fa-lock"></i>
                </span>
                <span className={styles.isJoin}>
                  <span style={{ color: "red" }}>2</span>/5
                </span>
              </div>
            </div>
            <h3 className={styles.roomTitle}>
              넷플릭스 빌어먹을 세상 따위 같이 달리실 분 들어오세요!
            </h3>
            <div className={styles.buttons}>
              <MenuButton menuName={"참여"} />
            </div>
          </div>

          {/* room end*/}
        </div>
        <div className={styles.nextBtn}>다음</div>
      </div>
    </section>
  );
}

export default JoinWizzroom;
