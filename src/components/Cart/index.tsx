import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, hideCart, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Product'
import { Button } from '../../styles'
import DeliveryData from '../DeliveryData'

const Cart = () => {
  const { isOpen, items, isInCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const fechaCarrinho = () => {
    dispatch(close())
  }

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  const escondeCarrinho = () => {
    dispatch(hideCart())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'esta-aberto' : ''}>
      <Overlay onClick={fechaCarrinho} />
      {items.length === 0 ? (
        <Sidebar>
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        </Sidebar>
      ) : (
        <Sidebar>
          {isInCart ? (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formataPreco(item.preco)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removePrato(item.id)}
                    />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                <p>Valor total</p>
                <p>{formataPreco(getTotalPrice())}</p>
              </Prices>
              <Button onClick={escondeCarrinho}>Continuar com a entrega</Button>
            </>
          ) : (
            <>
              <DeliveryData />
            </>
          )}
        </Sidebar>
      )}
    </CartContainer>
  )
}

export default Cart
