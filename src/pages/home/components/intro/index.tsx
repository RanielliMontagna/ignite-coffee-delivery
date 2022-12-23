import {
  BenefitContainer,
  BenefitsContainer,
  IntroContainer,
  MainContainer,
} from './styles'

import CoffeeIllustration from 'assets/intro/coffee.png'
import { benefits } from './static'
import { RoundedIcon } from 'components/roundedIcon'

export function Intro() {
  return (
    <IntroContainer>
      <MainContainer>
        <h1>
          Encontre o café perfeito
          <br />
          para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a<br />
          qualquer hora
        </p>
        <BenefitsContainer>
          {benefits.map((benefits) => (
            <BenefitContainer key={benefits.id}>
              <RoundedIcon
                color={benefits.color}
                icon={<benefits.icon size={16} weight="fill" />}
              />
              <p>{benefits.title}</p>
            </BenefitContainer>
          ))}
        </BenefitsContainer>
      </MainContainer>
      <img
        src={CoffeeIllustration}
        alt="Copo de café com o rótulo Coffee Delivery"
      />
    </IntroContainer>
  )
}
