import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const checkoutSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O CEP deve ter 8 dígitos')
    .max(8, 'O CEP deve ter 8 dígitos'),
  street: zod.string().min(3, 'A rua deve ter no mínimo 3 caracteres'),
  number: zod.string().min(1, 'O número deve ter no mínimo 1 caractere'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'O bairro deve ter no mínimo 3 caracteres'),
  city: zod.string().min(3, 'A cidade deve ter no mínimo 3 caracteres'),
  state: zod
    .string()
    .min(2, 'A sigla do estado deve ter 2 caracteres')
    .max(2, 'A sigla do estado deve ter 2 caracteres'),

  // 0 = Cartão de crédito
  // 1 = Cartão de débito
  // 2 = Dinheiro
  paymentMethod: zod.string().min(1, 'Selecione uma forma de pagamento'),
})

export type CheckoutFormValues = zod.infer<typeof checkoutSchema>

export function useCheckout() {
  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: '',
    },
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  return {
    methods,
    onSubmit,
  }
}
