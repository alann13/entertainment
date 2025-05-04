import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const links = [
    {
      path: '/trending',
      imgSrc: '/assets/icon-nav-home.svg',
      alt: 'Link to homepage',
    },
    {
      path: '/movies',
      imgSrc: '/assets/icon-nav-movies.svg',
      alt: 'Link to movies page',
    },
    {
      path: '/tv',
      imgSrc: '/assets/icon-nav-tv-series.svg',
      alt: 'Link to tv shows page',
    },
    {
      path: '/bookmark',
      imgSrc: '/assets/icon-nav-bookmark.svg',
      alt: 'Link to bookmark page',
    },
  ]

  return (
    <nav className="col-span-1 lg:w-[6rem] flex lg:flex-col items-center py-[2rem] bg-semi-darkblue lg:h-[calc(100vh-4rem)] rounded-[20px]">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={33} height={27} />
      </Link>

      <ul className="flex lg:flex-col items-center lg:pt-[4.5rem] gap-[2.5rem]">
        {links.map(({ path, imgSrc, alt }) => (
          <li key={path}>
            <Link href={path}>
              <Image src={imgSrc} alt={alt} width={20} height={20} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
