import Prez from './components/Prez'
import MainProducts from './components/MainProducts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Prez />
      <MainProducts />
    </main>
  )
}
