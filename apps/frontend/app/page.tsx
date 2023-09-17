import Prez from './components/Prez'
import PopularProducts from './components/PopularProducts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Prez />
      <PopularProducts />
      
    </main>
  )
}
