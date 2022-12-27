import { useCartContext } from 'context/cartContext'

export function useSelectedCoffees() {
  const { coffees } = useCartContext()

  const total =
    coffees?.reduce((acc, coffee) => {
      return acc + coffee.price * coffee.quantity
    }, 0) || 0

  const delivery = 5
  const totalWithDelivery = total + delivery

  return {
    total,
    delivery,
    totalWithDelivery,
  }
}
