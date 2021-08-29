import Head from 'next/head'
import { Counter } from '../Conuter'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[3rem]">Header</header>
      <main className='min-h-[calc(100vh-6rem)]'>{children}</main>
      <footer className="h-[3rem]">Footer</footer>
    </>
  )
}
