import NextHead from 'next/head'

export default function Head ({ title }: { title: String }) {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
    </>
  )
}
