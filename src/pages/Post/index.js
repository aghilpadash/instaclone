import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Post = () => {
  const params = useParams();
  const postId = params.id;

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ textAlign: "center" }}>
            <Link to={"/"}>Instagram</Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>post id is = {postId}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
