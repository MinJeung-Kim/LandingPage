import React, { useState } from "react";
import styles from "./Main.module.css";
import MenuButton from "../menu/MenuButton";
import { Modal } from "react-bootstrap";

function Main({ scrollToId }) {
  const icon = <i className="fas fa-bell"></i>;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>WiZZ ROOM</h1>
        <p className={styles.content}>
          위즈니가 제공하는 <br />
          메타스트리밍 플랫폼 위즈룸에서 <br />
          친구들과 함께 이야기하면서 영상을 감상하세요!
        </p>
        <div className={styles.button} onClick={handleShow}>
          <MenuButton icon={icon} menuName={"FAQ"} />
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src="./image/iphone-ipad.jpg" alt="" />
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>공지사항 또는 FAQ</Modal.Body>
      </Modal>
    </section>
  );
}

export default Main;
