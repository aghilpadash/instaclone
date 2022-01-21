import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { Col, Row } from "reactstrap";
import styles from "../Main.module.css";
import PostLastComment from "./PostLastComment";
import { Link } from "react-router-dom";
import { useState } from "react";
const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(24);
  const likePost = () => {
    setLikesCount((prev) =>
      isLiked ? parseInt(prev) - 1 : parseInt(prev) + 1
    );
    setIsLiked((prev) => !prev);
  };
  return (
    <Row>
      <Col>
        <div className={`${styles.postCard}`}>
          <div className={`${styles.postOwnerInfo}`}>
            <img
              src="https://cactusmusic.ir/wp-content/uploads/2021/03/%D8%A8%DB%8C-%D9%88%D9%81%D8%A7-%D8%A7%D8%B2-%D8%AC%D8%A7%D8%B3%D9%85-%D8%AE%D8%AF%D8%A7%D8%B1%D8%AD%D9%85%DB%8C.jpg"
              alt="user avatar"
            />
            <Link to={"/jasem"}>Jasem</Link>
          </div>
          <div className={`${styles.postContent}`}>
            <img
              src={`https://i.pinimg.com/originals/68/0e/86/680e86389e9ddd944f9b9cde42eb8953.jpg`}
            />
          </div>

          <div className={`${styles.postCardInfo}`}>
            <div className={`${styles.postCardActions}`}>
              <span
                onClick={() => likePost()}
                style={{
                  display: "inline-block",
                  color: isLiked ? "red" : "inherit",
                }}
              >
                <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} />
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </div>

            <div style={{ fontWeight: "bold" }}>{likesCount} likes</div>

            <div>
              <PostLastComment />
              <PostLastComment />
              <PostLastComment />
              <PostLastComment />
              <PostLastComment />
            </div>
          </div>

          <div className={`${styles.postCardComment}`}>
            <input placeholder="Add a comment ..." />
            <button>Post Comment</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PostCard;
