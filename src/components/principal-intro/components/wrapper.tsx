import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  margin: 40px 0 60px 0;

  div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 64px;
      line-height: 40px;
      margin: 0;
    }
    p {
      font-size: 24px;
    }
  }
`;
