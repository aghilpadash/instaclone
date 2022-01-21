import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import PostCard from "./components/PostCard";

const Main = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid #ccc",
              padding: "8px 0",
              backgroundColor: "white",
            }}
          >
            <Link to={"/"}>Instagram</Link>
          </div>
        </Col>
      </Row>

      <Container>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Container>
    </Container>
  );
};

export default Main;
