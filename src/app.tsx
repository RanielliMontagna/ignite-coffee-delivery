import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from 'routes/router'
import { defaultTheme } from 'styles/themes/default'
import { GlobalStyle } from 'styles/global'
import { CartContextProvider } from 'context/cartContext'
import { OrderContextProvider } from 'context/orderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
