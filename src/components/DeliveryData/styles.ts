import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type Props = {
  size: 'small' | 'medium' | 'big'
}

const mudaTamanho = (props: Props) => {
  if (props.size === 'big') {
    return '1fr'
  } else if (props.size === 'medium') {
    return '1fr 1fr'
  } else {
    return '2fr 1fr'
  }
}

export const TitleCart = styled.h2`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const InputGroup = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: ${mudaTamanho};
  column-gap: 34px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  div {
    width: 100%;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.white};
    border: none;
    margin: 8px 0;
    font-weight: bold;
    font-size: 14px;
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }
`
export const ButtonGroup = styled.div`
  margin-top: 16px;
`

export const Resposta = styled.div`
  p {
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 24px;
  }
`
