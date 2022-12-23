import { coffeeList } from './static'
import {
  CoffeeCard,
  CoffeeCardTag,
  CoffeeListContainer,
  CoffeeTagsContainer,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div>
        {coffeeList.map(({ title, price, description, image, tags }) => {
          return (
            <CoffeeCard key={title}>
              <div className="header">
                <img src={image} alt={title} />
                <CoffeeTagsContainer>
                  {tags.map((tag) => (
                    <CoffeeCardTag key={tag}>{tag}</CoffeeCardTag>
                  ))}
                </CoffeeTagsContainer>
              </div>
              <div className="main">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="footer">
                <h4>
                  <span>R$ </span>
                  {price.toLocaleString('pt-BR', {
                    style: 'decimal',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </h4>
              </div>
            </CoffeeCard>
          )
        })}
      </div>
    </CoffeeListContainer>
  )
}
