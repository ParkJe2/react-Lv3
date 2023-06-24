import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const priceInputHandler = (e) => {
    setPrice(Number(e.target.value.replaceAll(",", "")).toLocaleString());
  };

  const BtnHandler = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("이름과 가격을 모두 입력해주세요.");
    } else {
      alert(`{ name: ${name}, price: ${price.replaceAll(",", "")} }`);
    }
  };

  return (
    <>
      <form onSubmit={BtnHandler}>
        <h2>Input</h2>
        <div
          style={{
            display: "flex",
          }}
        >
          <label>이름&nbsp;</label>
          <StInput
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>가격&nbsp;</label>
          <StInput type="text" value={price} onChange={(e) => priceInputHandler(e)} />
          <StSaveBtn>저장</StSaveBtn>
        </div>
      </form>
    </>
  );
};

export default Input;

const StInput = styled.input`
  margin: 0 15px 0 5px;
`;

const StSaveBtn = styled.button`
  border: none;
  width: 50px;
  height: 25px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  outline: 2px solid purple;
  background-color: transparent;
`;
