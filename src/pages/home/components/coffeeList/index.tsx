import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { coffeeList } from './static'
import {
  AmountContainer,
  CartButton,
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
                <div>
                  <AmountContainer>
                    <button>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} weight="bold" />
                    </button>
                  </AmountContainer>
                  <CartButton>
                    <ShoppingCartSimple weight="fill" size={22} />
                  </CartButton>
                </div>
              </div>
            </CoffeeCard>
          )
        })}
      </div>
    </CoffeeListContainer>
  )
}
