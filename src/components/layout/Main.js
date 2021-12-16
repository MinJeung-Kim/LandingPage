import React, { useState } from "react";
import styles from "./Main.module.css";
import MenuButton from "../menu/MenuButton";
import { Modal } from "react-bootstrap";
import { text } from "../../locale/ko-KR";

function Main({ scrollToId }) {
  const icon = <i className="fas fa-bell"></i>;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>{text.mainTitle}</h1>
        <p className={styles.content}>{text.mainText}</p>
        <div className={styles.button} onClick={handleShow}>
          <MenuButton icon={icon} menuName={"FAQ"} />
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src="./image/iphone-ipad.jpg" alt="" />
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{text.notice}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text.noticeText}</Modal.Body>
      </Modal>
    </section>
  );
}

export default Main;
