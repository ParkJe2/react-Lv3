import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const SecondModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div>
      <StBtn onClick={openModal}>Second Modal</StBtn>
      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>x버튼과 바깥 영역 누르면 닫히는 모달</p>
            <button onClick={closeModal}>X</button>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

export default SecondModal;

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
  background-color: #fab1a0;
  height: 40px;
  width: 120px;
`;
