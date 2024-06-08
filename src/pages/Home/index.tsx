import Restaurants from '../../components/Restaurants'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useGetLojaQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type Loja = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: listaLoja, isLoading } = useGetLojaQuery()

  if (listaLoja) {
    return (
      <>
        <Header />
        <Restaurants isLoading={isLoading} lojas={listaLoja} />
        <Footer />
      </>
    )
  }
  return <Loader />
}

export default Home
