import { useState } from "react";
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
const BoxWrap = styled.div`
  width: 70%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Box = styled.div`
  width: 20%;
  height: 100%;
  background-color: salmon;
  position: relative;
  animation: box 2s forwards;
  @keyframes box {
    0% {
      ${(props) => props.ani} : 100px,
    }
    100% {
      ${(props) => props.ani} : 0
    }
  }
`;

export const Animation = () => {
  const [ani, setAni] = useState(``);
  return (
    <Wrap>
      <ButtonWrap>
        <Btn onClick={() => setAni(`top`)}>Up</Btn>
        <Btn>Down</Btn>
        <Btn>Right</Btn>
        <Btn>Left</Btn>
      </ButtonWrap>
      <BoxWrap>
        <Box className="box box1" ani={ani} />
        <Box className="box box2" />
        <Box className="box box3" />
        <Box className="box box4" />
      </BoxWrap>
    </Wrap>
  );
};
