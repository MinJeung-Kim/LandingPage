import React, { useState, ChangeEvent } from "react";
import MainTitle from "../common/MainTitle";
import styles from "./Contact.module.css";
import { Form, Row, InputGroup, Button, Col, Table } from "react-bootstrap";
import { addPost } from "../../api";
import { text } from "../../locale/ko-KR";

interface Props {
  scrollToId: string;
}

const Contact: React.SFC<Props> = ({ scrollToId }) => {
  const [contactTitle, setContactTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [select, setSelect] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);

  const handleTitleChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setContactTitle(value);
  };

  const handleContentChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setContent(value);
  };

  const handleEmailChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setEmail(value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let num: number = parseInt(e.target.value);
    setSelect(num);
  };

  const handleCheckChange = () => {
    setCheck(!check);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();

      setContactTitle("");
      setContent("");
      setEmail("");
    }

    addPost({ contactTitle, content, email, select, check });
    setValidated(true);
  };

  const [validated, setValidated] = useState(false);

  const onClick = () => {
    window.location.href = "https://www.wizzney.com/main?isRoot=1";
  };

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={text.contactTitle} subTitle={text.contactText} />
      <div className={styles.contentBox}>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p className={styles.title}>{text.addr}</p>
              <p> {text.licensee}</p>
              <p>{text.report}</p>
            </div>
          </div>
          <div className={styles.info}>
            <i className="fas fa-phone-alt"></i>
            <div>
              <p className={styles.title}>{text.customer}</p>
              <p>{text.closed}</p>
            </div>
          </div>
          <div className={styles.info} style={{ cursor: "pointer" }}>
            <i className="fab fa-google-wallet"></i>
            <p className={styles.title} onClick={onClick}>
              {text.goToWizzney}
            </p>
          </div>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>{text.article}</Form.Label>
              <Form.Select value={select} onChange={handleSelectChange}>
                <option value={1}>{text.useFaq}</option>
                <option value={2}>{text.arrorFaq}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>{text.email}</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Control.Feedback type="invalid">
                  {text.emailFeedback}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>{text.title}</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder={`${text.titleplaceholder}`}
                  maxLength={20}
                  aria-describedby="inputGroupPrepend"
                  required
                  value={contactTitle}
                  onChange={handleTitleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {text.titleFeedback}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label>{text.content}</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder={`${text.contentFeedback}`}
                style={{ height: "100px" }}
                value={content}
                onChange={handleContentChange}
              />
              <Form.Control.Feedback type="invalid">
                {text.contentFeedback}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ width: "100%" }}>
            <p>{text.information}</p>
            <p className={styles.account}>{text.informationAccount}</p>
            <Table bordered>
              <thead>
                <tr>
                  <th> {text.tableTh1}</th>
                  <th> {text.tableTh2}</th>
                  <th> {text.tableTh3}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{text.tableTd1}</td>
                  <td>{text.tableTd2}</td>
                  <td>{text.tableTd3}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label={`${text.check}`}
              feedback={`${text.checkFeedback}`}
              feedbackType="invalid"
              defaultChecked={check}
              onChange={handleCheckChange}
            />
          </Form.Group>
          <Button type="submit">{text.send}</Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
