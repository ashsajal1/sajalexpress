import RootRouter from "./router"
import { ProductProvider } from "./context/ProductContext"

export default function App() {
  return (
    <>
      <ProductProvider>
        <RootRouter />
      </ProductProvider>
    </>
  )
}
