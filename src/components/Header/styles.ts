import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import imagemHead from '../../assets/images/Vector.png'

export const SpaceDiv = styled.div`
  height: 514px;
  background-color: transparent;
  position: relative;
`

export const Imagem = styled.div`
  text-align: center;
  padding: 40px;
  height: 514px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${imagemHead});

  & > img {
    width: 365px;
    height: 214px;

    @media (max-width: ${breakpoints.tablet}) {
      max-height: 91px;
      max-width: 155px;
    }
  }

  div {
    img {
      margin: 52px 24px;

      @media (max-width: ${breakpoints.tablet}) {
        margin: 10px 0;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`

export const Titulo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  max-width: 714px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 38px;
    font-size: 40px;
  }
`
export const HeaderDiv = styled.div`
  background-color: transparent;
  max-width: 1366px;
  width: 100%;
  position: fixed;
`
