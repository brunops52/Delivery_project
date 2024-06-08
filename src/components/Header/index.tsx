import logo from '../../assets/images/logo.png'
import discount from '../../assets/images/discount_png.png'
import cutlery from '../../assets/images/cutlery_png.png'
import timer from '../../assets/images/timer_png.png'

import { HeaderDiv, Imagem, SpaceDiv, Titulo } from './styles'

const Header = () => (
  <div className="container">
    <HeaderDiv>
      <Imagem>
        <div>
          <Titulo>
            Viva experiências gastronômicas <br />
            no conforto da sua casa
          </Titulo>
          <img src={discount} />
          <img src={cutlery} />
          <img src={timer} />
        </div>
        <img src={logo} />
      </Imagem>
    </HeaderDiv>
    <SpaceDiv></SpaceDiv>
  </div>
)

export default Header
