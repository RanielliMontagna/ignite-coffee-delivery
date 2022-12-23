import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  CheckoutContainer,
  PaymentButton,
  PaymentButtonsContainer,
  TitleContainer,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <div>
          <TitleContainer>
            <MapPin size={22} color={theme['yellow-700']} />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleContainer>
        </div>
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
          <PaymentButtonsContainer>
            <PaymentButton selected>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </PaymentButton>
            <PaymentButton>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </PaymentButton>
            <PaymentButton>
              <Money size={16} />
              <span>Dinheiro</span>
            </PaymentButton>
          </PaymentButtonsContainer>
        </div>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <div>quero caféeeee</div>
      </div>
    </CheckoutContainer>
  )
}
