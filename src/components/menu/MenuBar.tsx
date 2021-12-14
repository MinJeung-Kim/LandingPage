import React, { useEffect, useState } from "react";
import styles from "./MenuBar.module.css";
import MenuButton from "./MenuButton";
import { menuLinks } from "./menuLinks";
import { Link } from "react-scroll";
import { isLogin } from "../../api";
import MyPage from "./MyPage";
import { text } from "../../locale/ko-KR";

interface Post {
  userNo: number;
  profile?: string | undefined;
  nick: string;
  userId: string;
  token?: string;
}

const MenuBar = React.memo(() => {
  const [info, setInfo] = useState<Post>();

  // 로그인
  const login = async () => {
    const response = await isLogin();
    localStorage.setItem("token", response.data.token);
    setInfo(response.data);
  };

  // 로그인 검증
  const checkAuth = async () => {
    try {
      // 로그인 검증 api 로직 추가하기
      const response = await isLogin();
      setInfo(response.data);
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  const onClick = (e: any) => {
    if (e.target.innerText === `${text.login}`) {
      login();
    } else if (e.target.innerText === `${text.make}`) {
      info?.token !== undefined
        ? (window.location.href = `http://localhost:8080/#/room/${info?.token}`)
        : alert(`${text.loggingInWithWizzney}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkAuth();
    }
  }, []);

  return (
    <div className={styles.box}>
      <ul className={styles.container}>
        {menuLinks.map(({ menuLinkId, scrollToId }, idx) => (
          <li className={styles.activeClass} key={idx}>
            <Link
              activeClass={styles.active}
              to={scrollToId}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {menuLinkId}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.menuButton}>
        <MenuButton menuName={text.make} onClick={onClick} />
        <MenuButton
          menuName={info ? text.mypage : text.login}
          onClick={onClick}
        />
        {info && <MyPage info={info} setInfo={setInfo} />}
      </div>
    </div>
  );
});

export default MenuBar;
