import styled, { css } from 'styled-components'

export const PaymentButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

interface PaymentButtonProps {
  selected?: boolean
}

const selectedButton = css`
  background: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-500']};
  border: 1px solid ${({ theme }) => theme['purple-500']};
  transition: all 0.1s ease-in-out;
`

export const PaymentButton = styled.button<PaymentButtonProps>`
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: none;
  border-radius: 6px;
  padding: 1rem;

  color: ${({ theme }) => theme['purple-500']};
  background: ${({ theme }) => theme['gray-400']};
  border: 1px solid transparent;

  span {
    color: ${({ theme }) => theme['gray-700']};
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['gray-500']};
    transition: all 0.1s ease-in-out;
  }

  ${({ selected }) => selected && selectedButton}

  &:focus {
    box-shadow: none;
  }
`
