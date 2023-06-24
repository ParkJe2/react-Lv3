import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <h2>Button</h2>
      <div>
        <StBtn line="2px solid red" size="large" onClick={() => alert("버튼을 만들어보세요")}>
          BUTTON1
        </StBtn>
        <StBtn line="2px solid orange" size="medium">
          BUTTON2
        </StBtn>
        <StBtn line="2px solid yellow" size="small">
          BUTTON3
        </StBtn>
      </div>
      <div>
        <StBtn line="2px solid green" size="large" onClick={() => prompt("어렵나요?")}>
          BUTTON4
        </StBtn>
        <StBtn line="2px solid blue" size="medium">
          BUTTON5
        </StBtn>
        <StBtn line="2px solid Indigo" size="small">
          BUTTON6
        </StBtn>
      </div>
    </>
  );
};

export default Button;

const StBtn = styled.button`
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;

  outline: ${({ line }) => line};
  color: ${({ color }) => color};

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 150px;
          height: 50px;
        `;
      case "medium":
        return css`
          width: 130px;
          height: 40px;
        `;
      case "small":
        return css`
          width: 100px;
          height: 30px;
        `;
    }
  }}
`;
