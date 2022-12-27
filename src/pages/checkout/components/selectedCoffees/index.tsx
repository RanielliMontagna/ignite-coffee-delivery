import { useCartContext } from 'context/cartContext'
import { formatToBRL } from 'utils/formatToBrl'
import { CoffeeItem } from './components/coffeeItem'
import { ItensContainer } from './components/coffeeItem/styles'
import { Button, Divider, SummaryValuesContainer } from './styles'
import { useSelectedCoffees } from './useSelectedCoffees'

export function SelectedCoffees() {
  const { delivery, total, totalWithDelivery } = useSelectedCoffees()
  const { coffees } = useCartContext()

  return (
    <div className="selectedCoffees">
      <ItensContainer>
        {coffees?.map((coffee, index) => (
          <ItensContainer key={coffee.id}>
            <CoffeeItem {...coffee} />
            {index !== coffees.length - 1 && <Divider />}
          </ItensContainer>
        ))}
      </ItensContainer>
      <Divider />
      <SummaryValuesContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ {formatToBRL(total)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ {formatToBRL(delivery)}</p>
        </div>
        <div>
          <p>Total</p>
          <p>R$ {formatToBRL(totalWithDelivery)}</p>
        </div>
      </SummaryValuesContainer>

      <Button type="submit">Confirmar pedido</Button>
    </div>
  )
}
