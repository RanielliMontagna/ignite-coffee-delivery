import styled from 'styled-components'

interface RoundedIconContainerProps {
  color: string
}

export const RoundedIconContainer = styled.div<RoundedIconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 16px;

  background: ${(props) => props.color};
  color: ${({ theme }) => theme['gray-100']};
`
