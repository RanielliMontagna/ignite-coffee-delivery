import { useFormContext } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
  Warning,
} from 'phosphor-react'

import type { CheckoutFormValues } from 'pages/checkout/useCheckout'

import { useTheme } from 'styled-components'
import { PaymentButton, PaymentButtonsContainer } from './styles'
import { TitleContainer } from 'pages/checkout/styles'
import { ErroContainer } from 'components/input/styles'

export function Payment() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CheckoutFormValues>()
  const theme = useTheme()

  const errorMessage = errors.paymentMethod?.message as string

  return (
    <div>
      <TitleContainer>
        <CurrencyDollar size={22} color={theme['purple-500']} />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleContainer>
      <div>
        <PaymentButtonsContainer>
          <PaymentButton
            type="button"
            selected={watch().paymentMethod === '0'}
            onClick={() => setValue('paymentMethod', '0')}
          >
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </PaymentButton>
          <PaymentButton
            type="button"
            selected={watch().paymentMethod === '1'}
            onClick={() => setValue('paymentMethod', '1')}
          >
            <Bank size={16} />
            <span>Cartão de débito</span>
          </PaymentButton>
          <PaymentButton
            type="button"
            selected={watch().paymentMethod === '2'}
            onClick={() => setValue('paymentMethod', '2')}
          >
            <Money size={16} />
            <span>Dinheiro</span>
          </PaymentButton>
        </PaymentButtonsContainer>
        {errors.paymentMethod && (
          <ErroContainer>
            <Warning size={18} />
            <p title={errorMessage}>{errorMessage}</p>
          </ErroContainer>
        )}
      </div>
    </div>
  )
}
