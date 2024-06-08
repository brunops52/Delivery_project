import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  padding: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: 40px;
    }
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 122px;
    height: 72px;
  }

  a {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.salmon};
    text-decoration: none;
    cursor: pointer;

    img {
      width: 46px;
      height: 44px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`
