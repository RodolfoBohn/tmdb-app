import styled from 'styled-components'

export const HorizontalShadow = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, rgb(235, 235, 235) 2%, transparent 50%, transparent 50% 100%);
  display: flex;
  align-items: flex-end;
  padding: 0 0 70px 30px;

  h2 {
    font-size: 64px;
  }
`