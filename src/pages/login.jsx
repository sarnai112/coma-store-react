import { Col, Container, Row } from "react-bootstrap";
import CircleButton from "../components/circle_button";
import naverBtn from "../assets/images/btn_naver.png";
import kakaoBtn from "../assets/images/btn_kakao.png";
import instaBtn from "../assets/images/btn_insta.png";

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} />
        <Col>
          <form>
            <div className="mb-3">
              <label className="form-lable">이메일</label>
              <input
                type="email"
                className="form-control mt-2"
                id="input_email"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-lable">비밀번호</label>
              <input
                type="password"
                className="form-control mt-2"
                id="input_pass"
              ></input>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="chkBox_saveId"
              ></input>
              <label className="form-check-label">아이디 저장</label>
            </div>
            <Row className="mt-5">
              <button type="submit" className="btn btn-primary">
                로그인
              </button>
            </Row>
            <Row className="mt-3">
              <hr style={{ borderTop: "1px solid #555555" }}></hr>
              <button type="submit" className="btn btn-outline-info">
                회원가입
              </button>
            </Row>
            <Row className="mt-3">
              <Col className="p-0">
                <span type="button">아이디 / 비밀번호 찾기</span>
              </Col>
              <Col />
            </Row>
            <Row className="mt-5">
              <Col />
              <Col>
                <span type="button">SNS로 간편 로그인</span>
              </Col>
              <Col />
            </Row>
            <Row className="mt-3">
              <hr style={{ borderTop: "1px solid #555555" }}></hr>
            </Row>
            <Row>
              <Col />
              <Col className="d-flex">
                <CircleButton imageUrl={instaBtn} />
                <CircleButton imageUrl={naverBtn} marginLeft={"ms-3"} />
                <CircleButton imageUrl={kakaoBtn} marginLeft={"ms-3"} />
              </Col>
              <Col />
            </Row>
          </form>
        </Col>
        <Col lg={4} />
      </Row>
    </Container>
  );
}

export default Login;
