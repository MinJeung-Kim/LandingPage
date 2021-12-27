import { useEffect, useState } from "react";
import { text } from "../../locale/ko-KR";
import MainTitle from "../common/MainTitle";
import styles from "./JoinWizzroom.module.css";
import Room from "./Room";
import axios from "axios";

interface Post {
  id: string;
  profile: string | null;
  roomTitle: string;
  nick: string;
  sessionMode: number;
  maxUsers: number;
}

interface Props {
  scrollToId: string;
}

const JoinWizzroom: React.SFC<Props> = ({ scrollToId }) => {
  const [users, setUsers] = useState<Post[]>([]);

  // const getRooms = async (): Promise<any> => {
  //   const response = await getRoom();

  // setUsers(response.data);

  useEffect(() => {
    const params = { page: 1 };
    // 방 리스트 api

    axios
      .post("https://black-mobile.wizzney.com/api/wizzroom/list", params, {})
      .then((response) => {
        if (response.data.resultCode === "0000") {
          console.log("!!!!!!!!!MenuButton.tsx!!!!!!!!", response.data.list);
          setUsers(response.data.list);
        }
        // setUsers(response)
      });
  }, []);

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={text.joinTitle} subTitle={text.joinText} />
      <div className={styles.contentBox}>
        <div className={styles.preBtn}>{text.preBtn}</div>

        {users.length <= 0 ? (
          <p className={styles.noneData}>{text.clickCreateWizroom}</p>
        ) : (
          <div className={styles.gridBox}>
            {users.map((user) => (
              <Room
                id={user.id}
                profile={user.profile}
                nick={user.nick}
                roomTitle={user.roomTitle}
                sessionMode={user.sessionMode}
                maxUsers={user.maxUsers}
              />
            ))}
          </div>
        )}

        <div className={styles.nextBtn}>{text.nextBtn}</div>
      </div>
    </section>
  );
};

export default JoinWizzroom;
