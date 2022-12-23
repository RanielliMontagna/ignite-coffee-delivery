import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  gap: 6rem;

  align-items: end;

  main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.5rem;

    img {
      max-width: 300px;
    }

    main {
      align-items: center;
      padding-bottom: 2.5rem;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme['yellow-700']};
  }
`

export const PaperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme['purple-500']};

  > div {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.5rem;

    > div span {
      display: block;
    }
  }
`
