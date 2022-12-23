import { ConfirmedOrderContainer, PaperInfo, TitleContainer } from './styles'
import illustration from 'assets/confirmedOrder/illustration.svg'
import { RoundedIcon } from 'components/roundedIcon'
import { useTheme } from 'styled-components'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

export function ConfirmedOrder() {
  const theme = useTheme()

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
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
