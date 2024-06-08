import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import imagemHead from '../../assets/images/Vector.png'

export const FooterSection = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  color: ${cores.salmon};
  text-align: center;

  div {
    padding: 40px;
    max-height: 329px;
    background-image: url(${imagemHead});

    ul {
      margin: 14px 20px 51px 20px;
      img {
        max-height: 28px;
        max-width: 28px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 20px;

        img {
          max-height: 20px;
          max-width: 20px;
        }
      }
    }

    li {
      display: inline;
      margin-left: 8px;
    }

    > img {
      max-height: 91px;
      max-width: 155px;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding: 20px;
      > img {
        max-height: 51px;
        max-width: 87px;
      }
    }
  }
`
