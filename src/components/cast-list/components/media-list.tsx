import styled from "styled-components";

interface Props {
  itemsCount: number
  ml: number
}

export const List = styled.ul<Props>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: ${props => (props.itemsCount * 215) + 60 -15}px;
  overflow-x: hidden;
  margin-left: ${props => props.ml}px;
  transition: all ease 0.5s;

  li {
    div {
      width: 200px;
      height: 400px;
      display: flex;
      flex-direction: column;
      background-color: #bbbbbb;
      border-radius: 5px;
      transition: 0.5s;
      position: relative;

      img {
        width: 100%;
        height: 300px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 5px;
      }
      p {
        margin: 0;
        flex: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: 0.5s;
      }
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
