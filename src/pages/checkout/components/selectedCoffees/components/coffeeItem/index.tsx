import { AmoutDisplay } from 'components/amountDisplay'
import { useCartContext } from 'context/cartContext'
import { Trash } from 'phosphor-react'
import type { ICoffee } from 'reducers/cart/types'
import { formatToBRL } from 'utils/formatToBrl'

import {
  ActionsContainer,
  CoffeeItemContainer,
  DescriptionContainer,
  RemoveButton,
} from './styles'

export function CoffeeItem(props: ICoffee) {
  const { handleChangeCoffeeQuantity, handleRemoveCoffeeFromCart } =
    useCartContext()

  const handleDecrement = () => {
    if (props.quantity === 1) return

    handleChangeCoffeeQuantity(props.id, props.quantity - 1)
  }

  const handleIncrement = () => {
    handleChangeCoffeeQuantity(props.id, props.quantity + 1)
  }

  const handleRemove = () => {
    handleRemoveCoffeeFromCart(props.id)
  }

  return (
    <CoffeeItemContainer>
      <img src={props.image} alt={props.name} />
      <div>
        <DescriptionContainer>
          <span>{props.name}</span>
          <strong>R$ {formatToBRL(props.price * props.quantity)}</strong>
        </DescriptionContainer>
        <ActionsContainer>
          <AmoutDisplay
            quantity={props.quantity}
            decrement={handleDecrement}
            increment={handleIncrement}
            style={{ height: 32 }}
          />
          <RemoveButton type="button" onClick={handleRemove}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ActionsContainer>
      </div>
    </CoffeeItemContainer>
  )
}
