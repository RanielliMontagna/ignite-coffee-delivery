import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import LogoCoffeeDelivery from 'assets/logo/logo-with-text.svg'
import { useHeader } from './useHeader'

export function Header() {
  const { location } = useHeader()

  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />
      <NavContainer>
        <LocationContainer>
          <MapPin weight="fill" className="icon" size={22} />
          {location}
        </LocationContainer>
        <CartButton>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
