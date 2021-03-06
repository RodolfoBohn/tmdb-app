import styled from "styled-components";

interface Props {
  itemsCount: number;
  ml: number;
}

export const CastListItem = styled.li`
  div {
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #bbbbbb;
    border-radius: 5px;
    position: relative;

    img {
      width: 100%;
      height: 300px;
      border-radius: 5px 5px 0 0;
      margin-bottom: 5px;
    }
    p {
      margin: 0;
      font-size: 20px;
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    p+p{
      font-size: 16px;
      font-weight: normal;
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
