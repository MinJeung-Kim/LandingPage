import React, { useState } from "react";
import MainTitle from "../common/MainTitle";
import styles from "./HowToUse.module.css";
import { Modal } from "react-bootstrap";
import { text } from "../../locale/ko-KR";

function HowToUse({ scrollToId }) {
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
        <MainTitle title={text.howToUseTitle} subTitle={text.howToUseText} />
        <div className={styles.itemBox}>
          <div className={styles.item}>
            <h1 className={styles.deps}>01.</h1>
            <span className={styles.depsContent}>{text.howToDepsContent1}</span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>02.</h1>
            <span className={styles.depsContent}>{text.howToDepsContent2}</span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>03.</h1>
            <span className={styles.depsContent}>{text.howToDepsContent3}</span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>04.</h1>
            <span className={styles.depsContent}>{text.howToDepsContent4}</span>
          </div>
          <div className={styles.item}>
            <h1 className={styles.deps}>05.</h1>
            <span className={styles.depsContent}>{text.howToDepsContent5}</span>
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
