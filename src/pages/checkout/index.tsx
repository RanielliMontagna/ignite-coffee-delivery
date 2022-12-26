import { FormProvider } from 'react-hook-form'

import { DeliveryAddress } from './components/deliveryAddress'
import { Payment } from './components/payment'
import { SelectedCoffees } from './components/selectedCoffees'
import { CheckoutContainer } from './styles'
import { useCheckout } from './useCheckout'

export function Checkout() {
  const { methods, onSubmit } = useCheckout()

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <CheckoutContainer>
          <div>
            <h1>Complete seu pedido</h1>
            <DeliveryAddress />
            <Payment />
          </div>
          <div>
            <h1>Cafés selecionados</h1>
            <SelectedCoffees />
          </div>
        </CheckoutContainer>
      </form>
    </FormProvider>
  )
}
