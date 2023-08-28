import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/HomePage';
import Cart from '../pages/CartPage';
import Favourite from '../pages/FavouritePage';
import NotFound from '../pages/NotFoundPage';
import Layout from "../Layout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";


export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="category" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
