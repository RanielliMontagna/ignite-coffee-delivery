import { InputHTMLAttributes, ReactNode } from 'react'
import uuid from 'react-uuid'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode
}

export function Input(props: InputProps) {
  const id = uuid()

  return (
    <InputContainer>
      <input {...props} id={id} />
      {props.endAdornment && (
        <div onClick={() => window.document.getElementById(id)?.focus()}>
          {props.endAdornment}
        </div>
      )}
    </InputContainer>
  )
}
