import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { defaultTheme } from 'styles/themes/default'

export const benefits = [
  {
    id: 1,
    title: 'Compra simples e segura',
    icon: ShoppingCart,
    color: defaultTheme['yellow-700'],
  },
  {
    id: 2,
    title: 'Embalagem mantém o café intacto',
    icon: Package,
    color: defaultTheme['gray-700'],
  },
  {
    id: 3,
    title: 'Entrega rápida e rastreada',
    icon: Timer,
    color: defaultTheme['yellow-500'],
  },
  {
    id: 4,
    title: 'O café chega fresquinho até você',
    icon: Coffee,
    color: defaultTheme['purple-500'],
  },
]
