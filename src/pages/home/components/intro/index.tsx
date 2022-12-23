import {
  BenefitContainer,
  BenefitIconContainer,
  BenefitsContainer,
  IntroContainer,
  MainContainer,
} from './styles'

import CoffeeIllustration from 'assets/intro/coffee.png'
import { benefits } from './static'

export function Intro() {
  return (
    <IntroContainer>
      <MainContainer>
        <h1>
          Encontre o café perfeito
          <br />
          para qualquer hora do dia
        </h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a<br />
          qualquer hora
        </h2>
        <BenefitsContainer>
          {benefits.map((benefits) => (
            <BenefitContainer key={benefits.id}>
              <BenefitIconContainer color={benefits.color}>
                <benefits.icon size={16} weight="fill" />
              </BenefitIconContainer>
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
