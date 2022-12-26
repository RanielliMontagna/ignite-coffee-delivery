import { Warning } from 'phosphor-react'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import uuid from 'react-uuid'

import { ErroContainer, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endadornment?: ReactNode
}

function Input(props: InputProps, ref: any) {
  const id = uuid()

  const {
    formState: { errors },
  } = useFormContext()

  const errorMessage = errors[props.name || 0]?.message as string

  return (
    <InputContainer>
      <input {...props} id={id} ref={ref} />
      {props.endadornment && (
        <div
          className="endadornment"
          onClick={() => window.document.getElementById(id)?.focus()}
        >
          {props.endadornment}
        </div>
      )}
      {props.name && errors[props.name] && (
        <ErroContainer>
          <Warning size={18} />
          <p title={errorMessage}>{errorMessage}</p>
        </ErroContainer>
      )}
    </InputContainer>
  )
}

export default forwardRef(Input)
