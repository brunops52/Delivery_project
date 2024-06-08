import { useState } from 'react'
import {
  Botao,
  Modal,
  ModalContent,
  ModalDescribe,
  ModalImage,
  ProductCard
} from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Pizzaria'

type Props = {
  image: string
  titulo: string
  descricao: string
  porcao: string
  preco: number
  produto: Cardapio
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const Product = ({
  titulo,
  descricao,
  image,
  porcao,
  preco,
  produto
}: Props) => {
  const dispatch = useDispatch()

  const addCarrinho = () => {
    dispatch(add(produto))
    dispatch(open())
    setModal(false)
  }
  const getDescricao = (descricao: string) => {
    if (descricao.length > 108) {
      return descricao.slice(0, 105) + '...'
    }
    return descricao
  }

  const [modal, setModal] = useState(false)

  return (
    <>
      <ProductCard>
        <img src={image} alt={image} />
        <h3>{titulo}</h3>
        <p>{getDescricao(descricao)}</p>
        <Botao
          onClick={() => {
            setModal(true)
          }}
        >
          Mais detalhes
        </Botao>
      </ProductCard>
      <Modal className={modal ? 'visivel' : ''}>
        <ModalContent>
          <ModalImage src={image} alt={image} />
          <ModalDescribe>
            <img
              onClick={() => {
                setModal(false)
              }}
              src={close}
              alt="Botao de fechar"
            />
            <h3>{titulo}</h3>
            <p>
              {descricao}
              <br />
              <br />
              <span>Serve: de {porcao}</span>
            </p>
            <Botao onClick={addCarrinho}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </Botao>
          </ModalDescribe>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Product
