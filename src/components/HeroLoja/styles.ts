import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Props } from '.'

export const HeroDiv = styled.div`
  background-color: #fff;
  padding-top: 172px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 80px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-top: 100px;
  }
`

export const Hero = styled.div<Props>`
background-image: url(${(Props) => Props.loja.capa});
background-size: cover;
position: relative;
z-index: 1;
color: ${cores.white};
padding: 32px;
width: 90%;
margin: 0 auto;

::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: "";
    opacity: 0.2;
    z-index: -1;
`

export const Tipo = styled.span`
  font-size: 32px;
  margin-left: 170px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 50px;
  }
`
export const Titulo = styled.h2`
  font-size: 32px;
  margin-top: 156px;
  margin-left: 170px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 50px;
    margin-top: 100px;
  }
`
