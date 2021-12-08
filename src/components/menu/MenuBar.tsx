import React from "react";
import styles from "./MenuBar.module.css";
import MenuButton from "./MenuButton";
import { menuLinks } from "./menuLinks";
import { Link } from "react-scroll";

function MenuBar() {
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
        <MenuButton menuName={"위즈룸 만들기"} />
        <MenuButton menuName={"로그인"} />
      </div>
    </div>
  );
}

export default MenuBar;
