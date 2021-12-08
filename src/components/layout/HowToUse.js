import React, { useState } from "react";
import MainTitle from "../common/MainTitle";
import styles from "./HowToUse.module.css";
import { Modal } from "react-bootstrap";

function HowToUse({ scrollToId }) {
  const title = "How to Use";
  const subTitle =
    "사용방법이 궁금하신가요? 플레이버튼을 클릭하여 영상으로 확인해보세요!";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iframePart = () => {
    return {
      __html: `<iframe src="https://www.youtube.com/watch?v=cuA_FzidQB8" width="100%" height="100%" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"></iframe>`,
    };
  };
  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <div className={styles.content}>
        <MainTitle title={title} subTitle={subTitle} />
        <div className={styles.itemBox}>
          <div className={styles.item}>
            <h1 className={styles.deps}>01.</h1>
            <span className={styles.depsContent}>
              크롬 또는 Edge 브라우저에 “위즈룸” 확장프로그램을 설치해주세요.
            </span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>02.</h1>
            <span className={styles.depsContent}>
              위즈룸 접속 후 “위즈룸 만들기” 실행.
            </span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>03.</h1>
            <span className={styles.depsContent}>위즈룸 초대 및 참여하기.</span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>04.</h1>
            <span className={styles.depsContent}>
              재생할 플랫폼 및 영상 선택하여 재생 실행.
            </span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>05.</h1>
            <span className={styles.depsContent}>
              참여 유저들과 실시간 채팅을 통해 영상 즐기기.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.video} onClick={handleShow}>
        <i className="far fa-play"></i>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <div dangerouslySetInnerHTML={iframePart()}></div>
      </Modal>
    </section>
  );
}

export default HowToUse;
