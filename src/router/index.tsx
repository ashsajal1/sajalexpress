import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Favourite from '../pages/Favourite';
import NotFound from '../pages/NotFound';
import Layout from "../Layout";


export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
