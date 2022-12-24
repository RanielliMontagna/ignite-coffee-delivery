import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme['gray-100']};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    border-radius: 6px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-700']};

  .icon {
    color: ${({ theme }) => theme['purple-500']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme['yellow-300']};
  color: ${({ theme }) => theme['yellow-700']};

  cursor: pointer;
`
