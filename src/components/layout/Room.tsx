import React from "react";
import styles from "./Room.module.css";
import MenuButton from "../menu/MenuButton";
import { text } from "../../locale/ko-KR";

export interface Props {
  id: string;
  profile: string | null;
  roomtitle: string;
  userId: string;
  sessionMode: number;
  maxUsers: number;
}

const Room: React.SFC<Props> = ({ ...props }) => {
  console.log("Room props", props);
  const handelonClick = () => {
    // 1. 랜딩페이지에서 로그인된 상태로 참여하면 게스트 로그인 X
    // 2. 위즈룸 생성 여부 검증 api 추가하기
    window.location.href = `http://localhost:8080/#/room/${props.id}`;
  };
  return (
    <div className={styles.room}>
      <div className={styles.stateBar}>
        <div className={styles.profileBox}>
          <div className={styles.profile}>{props.profile}</div>
          <span className={styles.nick}>{props.userId}</span>
        </div>
        <div className={styles.conditionBox}>
          <span className={styles.icon}>
            {props.sessionMode === 2 && <i className="fas fa-lock"></i>}
          </span>
          <span className={styles.isJoin}>
            <span style={{ color: "red" }}>2</span>/
            {props.maxUsers === 0 ? "무제한" : props.maxUsers}
          </span>
        </div>
      </div>
      <h3 className={styles.roomTitle}>{props.roomtitle}</h3>
      <div className={styles.buttons}>
        <MenuButton menuName={text.join} onClick={handelonClick} />
      </div>
    </div>
  );
};

export default Room;
