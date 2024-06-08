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
            <a href="https://github.com/brunops52">
              <img src={git} alt="git" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/47992650353
"
            >
              <img src={whats} alt="whats" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/brunops64/">
              <img src={instagram} alt="instagram" />
            </a>
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
