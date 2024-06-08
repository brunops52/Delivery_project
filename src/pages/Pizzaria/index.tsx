import Footer from '../../components/Footer'
import HeaderLoja from '../../components/HeaderLoja'
import HeroLoja from '../../components/HeroLoja'
import Products from '../../components/Products'

import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Pizzaria = () => {
  const { id } = useParams()

  const { data: listaProduto, isLoading } = useGetProductQuery(id ?? '')

  if (!listaProduto) {
    return <Loader />
  }
  return (
    <>
      <HeaderLoja />
      <HeroLoja loja={listaProduto} />
      <Products isLoading={isLoading} produtos={listaProduto.cardapio} />
      <Footer />
    </>
  )
}

export default Pizzaria
