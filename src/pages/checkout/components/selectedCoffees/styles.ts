import styled from 'styled-components'

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme['gray-400']};
`

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.75rem;

  background: ${({ theme }) => theme['yellow-500']};
  color: ${({ theme }) => theme['gray-100']};

  text-transform: uppercase;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['yellow-700']};
    transition: all 0.1s ease-in-out;
  }
`
