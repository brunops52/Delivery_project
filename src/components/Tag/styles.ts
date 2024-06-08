import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  background-color: rgba(0, 0, 0, 40%);
  border: 1px solid ${colors.white};
  border-right: none;
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 9px 24px;
  margin-left: 8px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: inline-block;
`
