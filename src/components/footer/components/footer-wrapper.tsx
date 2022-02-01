import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: #bbbbbb;
  padding: 0 30px;
  p {
    margin: 5px;
    a {
      font-weight: bolder;
    }
  }
  div {
    a {
      img {
        width: 30px;
        margin: 5px;
      }
    }
  }
`