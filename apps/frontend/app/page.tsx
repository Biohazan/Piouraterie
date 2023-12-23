import Prez from './components/Prez'
import MainProducts from './components/MainProducts'
import { fetchProducts } from './produits/page'

export default async function Home() {
  const initialData = await fetchProducts('popular', '')
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Prez />
      <MainProducts products={initialData} catParams={'popular'} />
    </main>
  )
}
