import React, { useState } from "react";
import styled from "styled-components";
import SecondModal from "./SecondModal";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Modal</h2>
      <StModalWarp>
        <StBtn onClick={openModal}>First Modal</StBtn>
        {isOpen && (
          <StModalBox>
            <StModalContents>
              <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요</p>
              <StCloseBtn onClick={closeModal}>닫기</StCloseBtn>
              <button>확인</button>
            </StModalContents>
          </StModalBox>
        )}
        <SecondModal />
      </StModalWarp>
    </div>
  );
}

export default Modal;

const StModalWarp = styled.div`
  display: flex;
`;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 60%;
  height: 30%;
  border-radius: 12px;
`;

const StBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: lightgray;
  margin-right: 15px;
  height: 40px;
  width: 120px;
`;

const StCloseBtn = styled.button`
  margin-right: 8px;
`;
