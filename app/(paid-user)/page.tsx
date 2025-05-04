import data from '@/data/movies.json'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const { movies } = data

  return (
    <>
      <ProductGrid pageHeading="Recommended for you" productCards={movies} />
    </>
  )
}
