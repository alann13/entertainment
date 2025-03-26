import PageHeading from '@/app/components/PageHeading'
import ProductCard from '@/app/components/ProductCard'
import data from '@/data/movies.json'

export default function Home() {
  const { movies } = data

  return (
    <>
      <PageHeading>Movies</PageHeading>
      <ul className="grid grid-cols-4 gap-[2.5rem]">
        {movies.map(({ id, title, image }) => (
          <li key={id}>
            <ProductCard title={title} imageSrc={image} />
          </li>
        ))}
      </ul>
    </>
  )
}
