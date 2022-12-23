import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

interface RoundedIconProps {
  icon: ReactNode
  color: string
}

export function RoundedIcon({ icon, color }: RoundedIconProps) {
  return <RoundedIconContainer color={color}>{icon}</RoundedIconContainer>
}
