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

  div.endadornment {
    position: absolute;
    padding: 0.75rem;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    height: 42.8px;
    color: ${({ theme }) => theme['gray-600']};
    font-style: italic;
  }
`

export const ErroContainer = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme['red-500']};

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;

  p {
    //max 2 lines
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
