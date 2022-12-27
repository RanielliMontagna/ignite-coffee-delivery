import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;

  > img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['purple-500']};
  span {
    color: ${({ theme }) => theme['gray-900']};
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['gray-500']};
  }
`
