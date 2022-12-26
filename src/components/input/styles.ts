import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    font-size: 0.875rem;

    padding: 0.75rem;

    border: 1px solid ${({ theme }) => theme['gray-400']};
    border-radius: 4px;

    background: ${({ theme }) => theme['gray-300']};
    color: ${({ theme }) => theme['gray-700']};
    &::placeholder {
      color: ${({ theme }) => theme['gray-600']};
    }
  }

  div {
    position: absolute;
    padding: 0.75rem;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-600']};
    font-style: italic;
  }
`
