import React, { useState } from "react";
import { styled } from "styled-components";

const options = ["리액트", "자바", "스프링", "리액트네이티브"];

const FirstSelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <SelectWrap>
      <SelectHeader
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{selectedOption || "리액트"}</span>
        <span>▼</span>
      </SelectHeader>
      {open && (
        <SelectList>
          {options.map((option) => (
            <SelectValue
              key={option}
              onClick={() => {
                handleSelectChange(option);
              }}
            >
              {option}
            </SelectValue>
          ))}
        </SelectList>
      )}
    </SelectWrap>
  );
};
export default FirstSelect;

const SelectWrap = styled.div`
  width: 200px;
  height: 40px;
  margin-top: 15px;
  border: 1px solid #ccc;
`;

const SelectHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const SelectList = styled.div`
  border-top: 1px solid #ccc;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;

const SelectValue = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
