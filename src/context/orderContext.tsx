import { CheckoutFormValues } from 'pages/checkout/useCheckout'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface OrderContextType {
  checkoutValues: CheckoutFormValues
  updateCheckoutValues: (values: CheckoutFormValues) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [checkoutValues, _setCheckoutValues] = useState(
    {} as CheckoutFormValues,
  )

  function updateCheckoutValues(values: CheckoutFormValues) {
    _setCheckoutValues(values)
  }

  return (
    <OrderContext.Provider
      value={{
        checkoutValues,
        updateCheckoutValues,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error(
      'useOrderContext must be used within a <OrderContextProvider />',
    )
  }

  return context
}
