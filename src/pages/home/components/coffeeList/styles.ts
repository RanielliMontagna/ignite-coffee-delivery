import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  h2 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 2rem;
  }

  padding-bottom: 2rem;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  height: 19.375rem;

  border-radius: 6px 36px 6px 36px;
  padding: 0rem 1.5rem 1.25rem 1.5rem;

  background: ${({ theme }) => theme['gray-200']};

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    img {
      margin-top: -1.5rem;
      width: 7.5rem;
      height: 7.5rem;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h3 {
      font-size: 1.25rem;
    }

    p {
      color: ${({ theme }) => theme['gray-600']};
    }
  }

  .footer {
    display: flex;
    flex: 1;
    align-items: flex-end;

    h4 {
      font-size: 1.5rem;
      font-weight: 800;
      color: ${({ theme }) => theme['gray-700']};

      span {
        font-size: 0.875rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
      }
    }
  }
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  font-weight: 700;
`

export const CoffeeCardTag = styled.div`
  text-transform: uppercase;

  background: ${({ theme }) => theme['yellow-300']};
  color: ${({ theme }) => theme['yellow-700']};
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;
`
