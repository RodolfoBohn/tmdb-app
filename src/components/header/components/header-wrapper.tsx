import styled from "styled-components";

interface Props {
  hasBackgroundColor: boolean;
}

export const HeaderWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: ${props => props.hasBackgroundColor ? '#bbbbbb' : 'none' };
  padding: 0 30px;
  transition: all ease 0.3s;
  img {
    width: 120px;
    cursor: pointer;
  }
`;
