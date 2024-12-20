import { BookReviewItemWrite, BookReviewItem as IBookReviewItem } from "@/models/book.model";
import styled from "styled-components";
import BookReviewItem from "./BookRviewItem";
import BookReviewAdd from "./BookReviewAdd";

interface Props {
  reviews: IBookReviewItem[];
  onAdd: (data: BookReviewItemWrite) => void;
}

const BookReview = ({ reviews, onAdd }: Props) => {
  return (
    <BookReviewStyle>
      <BookReviewAdd onAdd={onAdd} />
      {reviews.map((review) => (
        <BookReviewItem key={review.id} review={review} />
      ))}
    </BookReviewStyle>
  )
}

const BookReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default BookReview;