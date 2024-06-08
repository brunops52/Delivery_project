import { ClimbingBoxLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClimbingBoxLoader color={colors.pink} />
  </Container>
)

export default Loader
