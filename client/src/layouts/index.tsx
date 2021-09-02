import Link from '@comps/Link'
import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[3rem] flex justify-evenly shadow">
        <Link href="/home">Home</Link>
        <Link href="/visual-guide">Guia viusal</Link>
        <Link href="/signin">Ingresar</Link>
      </header>
      <main className="min-h-[calc(100vh-6rem)]">{children}</main>
      <footer className="h-[3rem] mt-10 ">Footer</footer>
    </>
  )
}
