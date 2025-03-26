export default function PageHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return <h1 className="pb-[2rem] text-[2rem]">{children}</h1>
}
