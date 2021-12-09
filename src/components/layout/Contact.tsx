import React, { useEffect, useState, ChangeEvent } from "react";
import MainTitle from "../common/MainTitle";
import styles from "./Contact.module.css";
import { Form, Row, InputGroup, Button, Col, Table } from "react-bootstrap";
import { addPost, getPost } from "../../api";

interface Post {
  id: number;
  select: number;
  email: string;
  contactTitle: string;
  content: string;
  check: boolean;
}

interface Props {
  scrollToId: string;
}

const Contact: React.SFC<Props> = ({ scrollToId }) => {
  const [contactTitle, setContactTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [select, setSelect] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await getPost();
    setPosts(response.data);
  };

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
    console.log(check);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();

      setContactTitle("");
      setContent("");
      setEmail("");
      getPosts();
    }

    addPost({ contactTitle, content, email, select, check });
    setValidated(true);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const title = "Contact";
  const subTitle = "위즈니 바로가기를 통해 알아보세요!";

  const [validated, setValidated] = useState(false);

  const onClick = () => {
    window.location.href = "https://www.wizzney.com/main?isRoot=1";
  };

  return (
    <section className={(styles.section, styles.main)} id={scrollToId}>
      <MainTitle title={title} subTitle={subTitle} />
      <div className={styles.contentBox}>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p className={styles.title}>
                (주) 유니윌 위즈페이 <br />
                서울시 강남구 테헤란로 124 5층
              </p>
              <p>사업자 등록 : 220-85-36623</p>
              <p>통신판매업 신고 : 서울 강남-02345호</p>
            </div>
          </div>
          <div className={styles.info}>
            <i className="fas fa-phone-alt"></i>
            <div>
              <p className={styles.title}>고객지원 1600-5731</p>
              <p>08:00 ~ 17:00 토,일 및 공휴일 휴무</p>
            </div>
          </div>
          <div className={styles.info} style={{ cursor: "pointer" }}>
            <i className="fab fa-google-wallet"></i>
            <p className={styles.title} onClick={onClick}>
              위즈니 바로가기
            </p>
          </div>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>문의항목</Form.Label>
              <Form.Select value={select} onChange={handleSelectChange}>
                <option value={1}>사용문의</option>
                <option value={2}>오류문의</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>이메일</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Control.Feedback type="invalid">
                  이메일을 정확히 입력해주세요.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>제목</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="제목을 입력해 주세요 (20자 이내)"
                  maxLength={20}
                  aria-describedby="inputGroupPrepend"
                  required
                  value={contactTitle}
                  onChange={handleTitleChange}
                />
                <Form.Control.Feedback type="invalid">
                  제목을 입력해주세요.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label>내용</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="내용을 입력해주세요."
                style={{ height: "100px" }}
                value={content}
                onChange={handleContentChange}
              />
              <Form.Control.Feedback type="invalid">
                내용을 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <p>(필수) 개인정보 수집·이용에 대한 안내</p>
            <p className={styles.account}>
              ㈜유니윌 위즈페이(위즈니)는 이용자 문의를 처리하기 위해 다음과
              같이 개인정보를 수집 및 이용하며, 이용자의 개인정보를 안전하게
              취급하는데 최선을 다하고 있습니다.
            </p>
            <Table bordered>
              <thead>
                <tr>
                  <th>수집항목</th>
                  <th>수집목적</th>
                  <th>보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이메일 주소</td>
                  <td>문의/요청/불편사항 확인 및 처리결과 회신</td>
                  <td>1년간 보관 후 지체없이 파기</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="위 내용에 동의합니다. "
              feedback="개인정보수집 · 이용에 동의해주세요. "
              feedbackType="invalid"
              defaultChecked={check}
              onChange={handleCheckChange}
            />
          </Form.Group>
          <Button type="submit">문의접수</Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
