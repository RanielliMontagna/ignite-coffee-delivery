import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import LogoCoffeeDelivery from 'assets/logo/logo-with-text.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />
      <NavContainer>
        <LocationContainer>
          <MapPin weight="fill" className="icon" size={22} />
          Porto Alegre, RS
        </LocationContainer>
        <CartButton>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
