import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, hideCart, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Product'
import { Button } from '../../styles'
import DeliveryData from '../DeliveryData'

const Cart = () => {
  const { isOpen, items, isInCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeDish = (id: number) => {
    dispatch(remove(id))
  }

  const cartHide = () => {
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
      <Overlay onClick={closeCart} />
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
                      <span>{formatPrice(item.preco)}</span>
                    </div>
                    <button type="button" onClick={() => removeDish(item.id)} />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                <p>Valor total</p>
                <p>{formatPrice(getTotalPrice())}</p>
              </Prices>
              <Button className="botao" onClick={cartHide}>
                Continuar com a entrega
              </Button>
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
