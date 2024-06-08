import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import imagemHead from '../../assets/images/Vector.png'

export const Section = styled.section`
  background-color: transparent;
  text-align: center;

  > div {
    background-image: url(${imagemHead});
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: ${colors.white};
  margin: 0 auto;
  padding: 0 120px;
  grid-gap: 80px;
  padding-top: 63px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: relative;
  padding-bottom: 90px;

  h2 {
    grid-column: span 2;
    font-size: 64px;
    font-weight: bold;
    color: ${colors.lightPink};
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    h2 {
      grid-column: span 1;
      font-size: 40px;
      margin-top: 40px;
    }
  }
`
