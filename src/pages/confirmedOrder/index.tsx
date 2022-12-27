import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { ConfirmedOrderContainer, PaperInfo, TitleContainer } from './styles'
import illustration from 'assets/confirmedOrder/illustration.svg'
import { RoundedIcon } from 'components/roundedIcon'
import { useOrderContext } from 'context/orderContext'

export function ConfirmedOrder() {
  const _navigate = useNavigate()
  const theme = useTheme()
  const { checkoutValues, updateCheckoutValues } = useOrderContext()

  useEffect(() => {
    if (Object.keys(checkoutValues).length === 0) {
      _navigate('/')
    }
  }, [_navigate, checkoutValues, updateCheckoutValues])

  const paymentMethod = useMemo(() => {
    switch (checkoutValues.paymentMethod) {
      case '0':
        return 'Cartão de Crédito'
      case '1':
        return 'Cartão de Débito'
      case '2':
        return 'Dinheiro'
    }
  }, [checkoutValues])

  return (
    <ConfirmedOrderContainer>
      <main>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado!</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <PaperInfo>
          <div>
            <RoundedIcon
              color={theme['purple-500']}
              icon={<MapPin size={16} weight="fill" />}
            />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {checkoutValues.street}, {checkoutValues.number}
                </strong>
              </span>
              <span>
                {checkoutValues.neighborhood} - {checkoutValues.city},{' '}
                {checkoutValues.state}
              </span>
            </div>
          </div>
          <div>
            <RoundedIcon
              color={theme['yellow-500']}
              icon={<Clock size={16} weight="fill" />}
            />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>
          <div>
            <RoundedIcon
              color={theme['yellow-700']}
              icon={<CurrencyDollar size={16} weight="fill" />}
            />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{paymentMethod}</strong>
              </span>
            </div>
          </div>
        </PaperInfo>
      </main>
      <img
        src={illustration}
        alt="Ilustração de um entregador indo entregar um café"
      />
    </ConfirmedOrderContainer>
  )
}
