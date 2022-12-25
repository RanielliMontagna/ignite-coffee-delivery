import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useForm, useFieldArray } from 'react-hook-form'

import { useCartContext } from 'context/cartContext'
import { coffeesList } from './static'
import {
  AmountContainer,
  CartButton,
  CoffeeCard,
  CoffeeCardTag,
  CoffeeListContainer,
  CoffeeTagsContainer,
} from './styles'

export function CoffeeList() {
  const { coffees, handleChangeCoffeeQuantity, handleAddCoffeeToCart } =
    useCartContext()

  const { control } = useForm({
    defaultValues: {
      coffeesList: coffeesList.map((coffee) => ({
        ...coffee,
        quantity: 1,
        idCoffee: coffee.id,
      })),
    },
  })

  const { fields, update } = useFieldArray({
    control,
    name: 'coffeesList',
  })

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <form>
        {fields.map((coffee, index) => {
          return (
            <CoffeeCard key={coffee.idCoffee}>
              <div className="header">
                <img src={coffee.image} alt={coffee.title} />
                <CoffeeTagsContainer>
                  {coffee.tags.map((tag) => (
                    <CoffeeCardTag key={tag}>{tag}</CoffeeCardTag>
                  ))}
                </CoffeeTagsContainer>
              </div>
              <div className="main">
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
              </div>
              <div className="footer">
                <h4>
                  <span>R$ </span>
                  {coffee.price.toLocaleString('pt-BR', {
                    style: 'decimal',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}
                </h4>
                <div>
                  <AmountContainer>
                    <button
                      type="button"
                      onClick={() => {
                        if (coffee.quantity === 1) return

                        update(index, {
                          ...coffee,
                          quantity: coffee.quantity - 1,
                        })
                      }}
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{coffee.quantity}</span>
                    <button
                      type="button"
                      onClick={() => {
                        update(index, {
                          ...coffee,
                          quantity: coffee.quantity + 1,
                        })
                      }}
                    >
                      <Plus size={14} weight="bold" />
                    </button>
                  </AmountContainer>
                  <CartButton
                    type="button"
                    onClick={() => {
                      const coffeeContext = coffees?.find(
                        (coffeeContext) => coffeeContext.id === coffee.idCoffee,
                      )

                      if (coffeeContext) {
                        handleChangeCoffeeQuantity(
                          coffee.idCoffee,
                          coffee.quantity,
                        )
                      } else {
                        handleAddCoffeeToCart({
                          id: coffee.idCoffee,
                          name: coffee.title,
                          price: coffee.price,
                          quantity: coffee.quantity,
                        })
                      }
                    }}
                  >
                    <ShoppingCartSimple weight="fill" size={22} />
                  </CartButton>
                </div>
              </div>
            </CoffeeCard>
          )
        })}
      </form>
    </CoffeeListContainer>
  )
}
