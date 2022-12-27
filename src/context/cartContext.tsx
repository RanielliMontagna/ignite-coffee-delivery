import { createContext, PropsWithChildren, useContext, useReducer } from 'react'
import {
  addToCart,
  removeFromCart,
  changeCartItemQuantity,
  clearCart,
} from 'reducers/cart/actions'

import { cartReducer } from 'reducers/cart/reducer'
import type { ICoffee } from 'reducers/cart/types'

interface CartContextType {
  coffees?: ICoffee[]
  handleAddCoffeeToCart: (coffee: ICoffee) => void
  handleRemoveCoffeeFromCart: (coffeeId: string) => void
  handleChangeCoffeeQuantity: (coffeeId: string, quantity: number) => void
  handleClearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  })

  const { coffees } = cartState

  function handleAddCoffeeToCart(coffee: ICoffee) {
    dispatch(addToCart(coffee))
  }

  function handleRemoveCoffeeFromCart(coffeeId: string) {
    dispatch(removeFromCart(coffeeId))
  }

  function handleChangeCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch(changeCartItemQuantity(coffeeId, quantity))
  }

  function handleClearCart() {
    dispatch(clearCart())
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        handleAddCoffeeToCart,
        handleRemoveCoffeeFromCart,
        handleChangeCoffeeQuantity,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const _context = useContext(CartContext)

  if (!_context) {
    throw new Error(
      'useCartContext must be used within a <CartContextProvider />',
    )
  }

  return _context
}
