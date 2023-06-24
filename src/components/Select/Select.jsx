import { styled } from "styled-components";

import FirstSelect from "./FirstSelect";
import SecondSelect from "./SecondSelect";

const Selects = () => {
  return (
    <>
      <h2>Select</h2>
      <StSelectBody>
        <StSelectBox>
          <FirstSelect />
          <SecondSelect />
        </StSelectBox>
      </StSelectBody>
    </>
  );
};

export default Selects;

const StSelectBody = styled.div`
  width: 95%;
  height: 130px;
  overflow: hidden;
  display: flex;
  outline: 2px solid lightgray;
`;

const StSelectBox = styled.div`
  display: flex;
`;
