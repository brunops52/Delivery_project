import { Cardapio } from '../../pages/Pizzaria'
import Loader from '../Loader'

import Product from '../Product'
import { List } from './styles'

type Props = {
  produtos: Cardapio[]
  isLoading: boolean
}

const Products = ({ produtos, isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div>
            <List>
              {produtos.map((produto) => (
                <div key={produto.id}>
                  <Product
                    produto={produto}
                    descricao={produto.descricao}
                    image={produto.foto}
                    titulo={produto.nome}
                    porcao={produto.porcao}
                    preco={produto.preco}
                  />
                </div>
              ))}
            </List>
          </div>
        </div>
      )}
    </>
  )
}

export default Products
