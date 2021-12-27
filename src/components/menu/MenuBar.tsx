import React, { useEffect, useState } from "react";
import styles from "./MenuBar.module.css";
import MenuButton from "./MenuButton";
import { menuLinks } from "./menuLinks";
import { Link } from "react-scroll";
import MyPage from "./MyPage";
import { text } from "../../locale/ko-KR";
import axios from "axios";

interface Post {
  userNo: number;
  profile?: string | undefined;
  nick: string;
  userId: string;
  token?: string;
}

const MenuBar = React.memo(() => {
  const [info, setInfo] = useState<Post>();
  const [isToggleOn, setIsToggleOn] = useState(false);

  // 로그인 => 위즈니로 이동
  const login = async () => {
    window.location.href = `https://black-mobile.wizzney.com/main?isRoot=1`;
  };

  // 로그인 검증
  const checkAuth = async (token: string) => {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      },
    };
    try {
      // 로그인 검증 api 로직 추가하기
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .post(
          "https://black-mobile.wizzney.com/api/wizzroom/verifyManager",
          axiosConfig
        )
        .then((response) => {
          if (response.data.resultCode === "9999") {
            alert(`${text.loggingInWithWizzney}`);
          } else {
            localStorage.setItem("token", token);
            setInfo(response.data);
          }
        })
        .catch((result) => {
          console.log("login Exception", result);
        });
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  const onClick = (e: any) => {
    setIsToggleOn(!isToggleOn);
    if (e.target.innerText === `${text.login}`) {
      login();
    } else if (e.target.innerText === `${text.make}`) {
      // 위즈니 회원 정보(닉네임, 프로필) 메타스트림에 전달
      console.log(localStorage.getItem("token"));
      localStorage.getItem("token") !== undefined
        ? (window.location.href = `http://localhost:8080/#/room/`)
        : alert(`${text.loggingInWithWizzney}`);
    }
  };

  useEffect(() => {
    // 위즈니에서 로그인해서 받은 토큰으로 변경하기.
    // 현재 무조건 토큰 발생됨.
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJXSVpaTkVZMjAyMTA5MTQ3czM3R1UiLCJpYXQiOjE2NDA1NjI2MzMsImV4cCI6MTY0MDY0OTAzM30.XTzX9W5jfL1RWnZoPPV_DSKsm5CMtYJZq2J8ElBIfzc";

    if (token) {
      checkAuth(token);
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
        {info && isToggleOn && <MyPage info={info} setInfo={setInfo} />}
      </div>
    </div>
  );
});

export default MenuBar;
