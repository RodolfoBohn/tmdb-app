import styled from'styled-components'

interface Props {
  isPrincipal: boolean
}

export const PageWrapper = styled.div<Props>`
width: 100%;
padding: 0 30px;
display: flex;
flex-direction: column;
margin-top: ${props => props.isPrincipal ? 110 : 0}px;
`