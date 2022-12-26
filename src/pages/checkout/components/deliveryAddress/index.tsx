import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { MapPin } from 'phosphor-react'

import { TitleContainer } from 'pages/checkout/styles'
import Input from 'components/input'
import { FieldContainer } from './styles'

export function DeliveryAddress() {
  const theme = useTheme()
  const { register } = useFormContext()

  return (
    <div>
      <TitleContainer>
        <MapPin size={22} color={theme['yellow-700']} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleContainer>
      <FieldContainer>
        <div>
          <Input type="text" placeholder="CEP" {...register('cep')} />
        </div>
        <div>
          <Input type="text" placeholder="Rua" {...register('street')} />
        </div>
        <div>
          <Input type="text" placeholder="Número" {...register('number')} />
          <Input
            type="text"
            placeholder="Complemento"
            endadornment="Opcional"
            {...register('complement')}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <Input type="text" placeholder="Cidade" {...register('city')} />
          <Input type="text" placeholder="UF" {...register('state')} />
        </div>
      </FieldContainer>
    </div>
  )
}
