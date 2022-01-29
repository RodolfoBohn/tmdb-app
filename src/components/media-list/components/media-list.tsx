import styled from "styled-components";

interface Props {
  itemsCount: number;
  ml: number;
}

export const MediaListItem = styled.li`
  div {
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #bbbbbb;
    border-radius: 5px;
    transition: 0.5s;
    position: relative;

    span {
      position: absolute;
      height: 300px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: 1s;
    }

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

    &:hover {
      cursor: pointer;
      background-color: #161616;

      p {
        color: white;
      }
      span {
        opacity: 1;
      }
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
