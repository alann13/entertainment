import PageHeading from './PageHeading'
import ProductCard from './ProductCard'

interface Props {
  pageHeading: string
  productCards: {
    id: number
    title: string
    year: number
    image: string
    category: string
    rating: string
  }[]
}

export default function ProductGrid({ pageHeading, productCards }: Props) {
  return (
    <>
      <PageHeading>{pageHeading}</PageHeading>
      <ul className="grid grid-cols-4 gap-[2.5rem]">
        {productCards.map(({ id, title, image }) => (
          <li key={id}>
            <ProductCard title={title} imageSrc={image} />
          </li>
        ))}
      </ul>
    </>
  )
}
