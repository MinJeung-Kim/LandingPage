import { useEffect, useState } from "react";
import { getRoom } from "../../api";
import { text } from "../../locale/ko-KR";
import MainTitle from "../common/MainTitle";
import styles from "./JoinWizzroom.module.css";
import Room from "./Room";

interface Post {
  id: number;
  profile: string | null;
  avatar: string;
  roomtitle: string;
  username: string;
  sessionMode: number;
  maxUsers: number;
}

interface Props {
  scrollToId: string;
}

const JoinWizzroom: React.SFC<Props> = ({ scrollToId }) => {
  const [users, setUsers] = useState<Post[]>([]);

  const getRooms = async (): Promise<any> => {
    const response = await getRoom();
    setUsers(response.data);
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={text.joinTitle} subTitle={text.joinText} />
      <div className={styles.contentBox}>
        <div className={styles.preBtn}>{text.preBtn}</div>
        <div className={styles.gridBox}>
          {users.map((user) => (
            <Room
              key={user.id}
              profile={user.profile}
              nick={user.username}
              usertitle={user.roomtitle}
              public={user.sessionMode}
              headcount={user.maxUsers}
            />
          ))}
        </div>
        <div className={styles.nextBtn}>{text.nextBtn}</div>
      </div>
    </section>
  );
};

export default JoinWizzroom;
