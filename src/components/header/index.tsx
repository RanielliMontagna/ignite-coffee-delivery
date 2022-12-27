import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import LogoCoffeeDelivery from 'assets/logo/logo-with-text.svg'
import { useHeader } from './useHeader'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCartContext } from 'context/cartContext'

export function Header() {
  const { coffees } = useCartContext()

  const coffeesInCart = coffees?.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const _navigate = useNavigate()
  const { location } = useHeader()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>
      <NavContainer>
        <LocationContainer>
          <MapPin weight="fill" className="icon" size={22} />
          {location}
        </LocationContainer>
        <CartButton
          onClick={() => _navigate('/checkout')}
          disabled={!coffeesInCart}
          quantityInCart={coffeesInCart || 0}
        >
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
