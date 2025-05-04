'use client'
import Image from 'next/image'

interface Props {
  title: string
  imageSrc: string
}

export default function ProductCard({ title, imageSrc }: Props) {
  return (
    <>
      <div className="relative aspect-[280/174] mb-[10px]">
        <Image className="rounded-[8px]" src={imageSrc} alt={title} fill />
        <button className="absolute top-4 right-4 cursor-pointer">
          <Image
            src={`/assets/${'icon-bookmark-empty.svg'}`}
            alt="bookmark icon"
            width={20}
            height={20}
          />
        </button>
      </div>
      <p className="text-[1.1rem]">{title}</p>
    </>
  )
}
