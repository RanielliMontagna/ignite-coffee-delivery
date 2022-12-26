import styled from 'styled-components'

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

    div.selectedCoffees {
      border-radius: 6px 44px;
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
