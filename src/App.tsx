import RootRouter from "./router"
import { ProductProvider } from "./temp_context/ProductContext"

export default function App() {
  return (
    <>
      <ProductProvider>
        <RootRouter />
      </ProductProvider>
    </>
  )
}
