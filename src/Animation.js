import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
  position: relative;
`;
const BoxWrap = styled.div`
  width: 70%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Box = styled.div`
  width: 20%;
  height: 100%;
  background-color: salmon;
`;
const ButtonWrap = styled.div`
  width: 30%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 50px;
`;
const Btn = styled.div`
  width: 20%;
  height: 100%;
  background-color: coral;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: crimson;
  }
`;

export const Animation = () => {
  return (
    <Wrap>
      <ButtonWrap>
        <Btn>Up</Btn>
        <Btn>Down</Btn>
        <Btn>Right</Btn>
        <Btn>Left</Btn>
      </ButtonWrap>
      <BoxWrap>
        <Box />
        <Box />
        <Box />
        <Box />
      </BoxWrap>
    </Wrap>
  );
};
