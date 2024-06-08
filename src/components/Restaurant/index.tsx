import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

import { RestaurantDiv, Conteudo, TituloDiv, Tags, Capa } from './styles'

type Props = {
  image: string
  tags: string
  titulo: string
  nota: number
  descricao: string
  id: number
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const Restaurant = ({ image, tags, titulo, nota, descricao, id }: Props) => {
  return (
    <RestaurantDiv>
      <Capa>
        <img src={image} alt={image} />
      </Capa>
      <Tags>
        <Tag>{tags}</Tag>
      </Tags>
      <Conteudo>
        <TituloDiv>
          <h3>{titulo}</h3>
          <span>
            {nota} <img src={estrela} alt="estrela" />
          </span>
        </TituloDiv>
        <p>{descricao}</p>
        <Link className="botao" onClick={scrollToTop} to={`/restaurante/${id}`}>
          Saiba Mais
        </Link>
      </Conteudo>
    </RestaurantDiv>
  )
}

export default Restaurant
