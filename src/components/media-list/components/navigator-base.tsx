import styled from "styled-components";

interface Props {
  isVisible: boolean
}

export const NavigatorBase = styled.div<Props>`
  position: absolute;
  width: 40px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 50;
  bottom: 10;
  color: #fff;
  opacity: 0;
  transition: 0.5s;

  &:hover{
    opacity: 1;
    cursor: pointer;
  }
`;
