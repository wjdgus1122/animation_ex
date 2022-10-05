import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
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

export const Animation = () => {
  return (
    <Wrap>
      <BoxWrap>
        <Box />
        <Box />
        <Box />
        <Box />
      </BoxWrap>
    </Wrap>
  );
};
