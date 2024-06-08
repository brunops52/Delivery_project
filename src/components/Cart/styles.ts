import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import lixo from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.esta-aberto {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 32px 8px 0 8px;

  .empty-text {
    font-size: 16px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 240px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.white};
  color: ${colors.lightPink};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixo});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Prices = styled.div`
  display: flex;
  color: ${colors.white};
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 24px;
`
