import logo from '../../assets/images/logo.png'
import git from '../../assets/images/git_png.png'
import instagram from '../../assets/images/insta_png.png'
import whats from '../../assets/images/whats_png.png'
import { FooterSection } from './styles'

const Footer = () => (
  <div className="container">
    <FooterSection>
      <div>
        <img src={logo} />
        <ul>
          <li>
            <img src={git} alt="git" />
          </li>
          <li>
            <img src={whats} alt="whats" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br />
          dos produtos é toda do estabelecimento contratado.
        </p>
      </div>
    </FooterSection>
  </div>
)

export default Footer
