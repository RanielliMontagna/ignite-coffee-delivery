import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 2rem;
  padding: 2.5rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h1 {
      font-weight: 700;
      font-size: 1.125rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.5rem;
      border-radius: 6px;

      background: ${({ theme }) => theme['gray-200']};
    }
  }
`

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    p:last-child {
      font-size: 0.875rem;
    }
  }
`

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
  color: ${({ theme }) => theme['purple-700']};
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
