import { ClimbingBoxLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClimbingBoxLoader color={cores.salmon} />
  </Container>
)

export default Loader
