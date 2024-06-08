import { Loja } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { List, Section } from './styles'
import Loader from '../Loader'

type Props = {
  lojas: Loja[]
  isLoading: boolean
}

const Restaurants = ({ lojas, isLoading }: Props) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <Section className="container">
        <div>
          <List>
            <h2>RESTAURANTES</h2>
            {lojas.map((loja) => (
              <Restaurant
                key={loja.id}
                descricao={loja.descricao}
                image={loja.capa}
                nota={loja.avaliacao}
                tags={loja.tipo}
                titulo={loja.titulo}
                id={loja.id}
              />
            ))}
          </List>
        </div>
      </Section>
    )}
  </>
)

export default Restaurants
