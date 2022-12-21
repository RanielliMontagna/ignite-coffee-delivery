import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from 'pages/home'
import { Checkout } from 'pages/checkout'
import { DefaultLayout } from 'layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
