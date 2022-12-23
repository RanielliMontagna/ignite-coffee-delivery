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

export function Header() {
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
        <CartButton onClick={() => _navigate('/checkout')}>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
