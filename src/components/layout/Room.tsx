import React, { useEffect, useState } from "react";
import styles from "./Room.module.css";
import MenuButton from "../menu/MenuButton";

export interface Props {
  key: number;
  profile?: string | undefined;
  nick: string;
  usertitle: string;
  public: boolean;
  headcount: number;
}

const Room: React.SFC<Props> = ({ ...props }) => {
  return (
    <div className={styles.room}>
      <div className={styles.stateBar}>
        <div className={styles.profileBox}>
          <div className={styles.profile}>{props.profile}</div>
          <span className={styles.nick}>{props.nick}</span>
        </div>
        <div className={styles.conditionBox}>
          <span className={styles.icon}>
            {props.public && <i className="fas fa-lock"></i>}
          </span>
          <span className={styles.isJoin}>
            <span style={{ color: "red" }}>2</span>/{props.headcount}
          </span>
        </div>
      </div>
      <h3 className={styles.roomTitle}>{props.usertitle}</h3>
      <div className={styles.buttons}>
        <MenuButton menuName={"참여"} />
      </div>
    </div>
  );
};

export default Room;
