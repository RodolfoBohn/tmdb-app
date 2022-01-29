import styled from "styled-components";

interface Props {
  itemsCount: number;
  ml: number;
}

export const WrapperUl = styled.ul<Props>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: ${(props) => props.itemsCount * 215 - 15}px;
  overflow-x: hidden;
  margin-left: ${(props) => props.ml}px;
  transition: all ease 0.5s;
`;
