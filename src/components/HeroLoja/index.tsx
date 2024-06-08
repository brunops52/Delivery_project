import { Hero, HeroDiv, Tipo, Titulo } from './styles'

export type Props = {
  loja: {
    tipo: string
    titulo: string
    capa: string
  }
}

const HeroLoja = ({ loja }: Props) => (
  <HeroDiv className="container">
    <Hero loja={loja}>
      <Tipo>{loja.tipo}</Tipo>
      <Titulo>{loja.titulo}</Titulo>
    </Hero>
  </HeroDiv>
)

export default HeroLoja
