import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import { FC } from "react";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

const LikeButton: FC<Props> = ({ book, onClick }) => {
  return (
    <LikeButtonStyle
      size="medium"
      scheme={book.liked ? "like" : "normal"}
      onClick={onClick}
    >
      <FaHeart />
      {book.likes}
    </LikeButtonStyle>
  );
};

const LikeButtonStyle = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: inherit;

    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
