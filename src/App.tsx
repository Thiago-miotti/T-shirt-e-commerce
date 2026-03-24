import { DisplayProducts } from "./components/DisplayProducts"
import { Header } from "./components/Header"
import { products } from './mocks/data'

function App() {

  return (
    <div className="w-full h-screen bg-gray-1 overflow-hidden">
      <Header className="pl-32" />
      <section className="w-full h-[calc(100%-52px)] pl-32 flex flex-col justify-center gap-8 overflow-y-scroll">
        <DisplayProducts products={products} />
      </section>
    </div>
  )
}

export default App
