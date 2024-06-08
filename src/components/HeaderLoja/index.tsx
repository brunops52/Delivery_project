import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import cart_image from '../../assets/images/cart_png.png'
import return_image from '../../assets/images/return_png.png'
import imagemHead from '../../assets/images/Vector.png'
import { Imagem, List } from './styles'
import { useDispatch } from 'react-redux'

import { open } from '../../store/reducers/cart'

const HeaderLoja = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <div className="container">
      <Imagem style={{ backgroundImage: `url(${imagemHead})` }}>
        <List>
          <li>
            <Link to="/">
              <img src={return_image} alt="return" />
            </Link>
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li onClick={openCart}>
            <a>
              <img src={cart_image} alt="cart" />
            </a>
          </li>
        </List>
      </Imagem>
    </div>
  )
}

export default HeaderLoja
