import { useEffect, useState } from "react";
import { getPost } from "../../api";
import MainTitle from "../common/MainTitle";
import styles from "./JoinWizzroom.module.css";
import Room from "./Room";

interface Post {
  key: number;
  profile?: string | undefined;
  nick: string;
  usertitle: string;
  public: boolean;
  headcount: number;
}

interface Props {
  scrollToId: string;
}

const JoinWizzroom: React.SFC<Props> = ({ scrollToId }) => {
  const title = "Join a Wizzroom";
  const subTitle = "위즈룸에 참여 해보세요!";

  const [users, setUsers] = useState<Post[]>([]);

  const getPosts = async (): Promise<any> => {
    const response = await getPost();
    setUsers(response.data);
    console.log(users);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={title} subTitle={subTitle} />
      <div className={styles.contentBox}>
        <div className={styles.preBtn}>이전</div>
        <div className={styles.gridBox}>
          {users.map((user) => (
            <Room
              key={user.key}
              profile={user.profile}
              nick={user.nick}
              usertitle={user.usertitle}
              public={user.public}
              headcount={user.headcount}
            />
          ))}
        </div>
        <div className={styles.nextBtn}>다음</div>
      </div>
    </section>
  );
};

export default JoinWizzroom;
