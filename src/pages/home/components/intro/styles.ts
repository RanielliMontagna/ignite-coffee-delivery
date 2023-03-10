import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0;

  > img {
    width: 100%;
    max-width: 475px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    > img {
      display: none;
    }
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 588px;

  h1 {
    line-height: 130%;
    font-size: 3rem;
    font-weight: 800;
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const BenefitsContainer = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`

export const BenefitContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1rem;
  align-items: center;
`
