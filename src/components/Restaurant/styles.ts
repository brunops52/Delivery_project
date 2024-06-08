import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantDiv = styled.div`
  max-width: 434px;
  background-color: #ff8e8e;
  color: #fff;
  position: relative;
  border-radius: 30px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.4);
`
export const Capa = styled.div`
  max-width: 434px;
  max-height: 190px;
  position: relative;

  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`

export const Conteudo = styled.div`
  padding: 16px;
  max-width: 434px;
  max-height: 300px;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.desktop}) {
    max-height: 350px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    height: 180px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 230px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      height: 260px;
    }
  }
  a {
    display: block;
    width: 90%;
    background-color: #fff;
    color: #ff8e8e;
    font-size: 14px;
    padding: 4px 6px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    align-self: center;
  }
`

export const TituloDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
  }

  img {
    width: 21px;
    margin-left: 8px;
  }

  span {
    display: flex;
    align-items: center;
  }
`
export const Tags = styled.div`
  display: flex;
  position: absolute;
  top: 31px;
  right: 0;
`
