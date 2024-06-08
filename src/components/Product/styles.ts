import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Botao = styled.button`
  display: block;
  padding: 4px;
  color: ${colors.white};
  background-color: ${colors.orange};
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`

export const ProductCard = styled.div`
  max-width: 320px;
  height: 100%;
  padding: 16px;
  background-color: ${colors.white};
  font-weight: bold;
  color: ${colors.orange};
  font-weight: bold;
  border: 5px solid ${colors.orange};

  img {
    height: 161px;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    margin: 18px 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 32px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  display: none;
  background-color: rgba(0, 0, 0, 0.73);

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  padding: 32px;
  background-color: ${colors.lightPink};
  color: ${colors.white};
  display: flex;
  position: relative;

  ${Botao} {
    background-color: ${colors.white};
    color: ${colors.lightPink};
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    > img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`

export const ModalDescribe = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  h3 {
    font-size: 18px;
  }

  p {
    margin: 16px 0;
  }

  ${Botao} {
    align-self: flex-start;
    margin-top: auto;
    margin-bottom: 27px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0px;
    p {
      font-size: 16px;
    }
  }
`
