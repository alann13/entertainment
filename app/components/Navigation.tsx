import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="col-span-1 w-[6rem] flex flex-col items-center py-[2rem] bg-semi-darkblue h-[calc(100vh-4rem)] rounded-[20px]">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={33} height={27} />
      </Link>
      <div className="flex flex-col items-center pt-[4.5rem]">
        <Link href="/bookmark">
          <Image
            src="/assets/icon-nav-bookmark.svg"
            alt="Bookmark page"
            width={17}
            height={20}
          />
        </Link>
      </div>
    </nav>
  )
}
