import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  justify-content: center;
  grid-gap: 32px;
  justify-items: center;
  background-color: ${colors.white};
  padding: 56px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
