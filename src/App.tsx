import RootRouter from "./router"
import { ProductProvider } from "./Context/ProductContext"

export default function App() {
  return (
    <>
      <ProductProvider>
        <RootRouter />
      </ProductProvider>

    </>
  )
}
