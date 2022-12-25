export interface ICoffee {
  id: string
  name: string
  price: number
  quantity: number
}

export interface CartState {
  coffees: ICoffee[]
}
