# 2024/11/01 11주차 파트 5

프론트엔드 기초 강의 마감!

오늘은 QR출석 + 특강이 있는 날이라 강의가 거의 없었으므로 쓸 수 있는게 거의 없음...

## props

하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달하기 위해 사용

```tsx
import { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

type TodoModalProps = {
  show: boolean;
  todo: Todo | null;
  handleClose: () => void;
};

const TodoModal: FC<TodoModalProps> = ({ show, todo, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo?.text}</Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModal;

```
