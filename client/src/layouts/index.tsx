import Button from '@comps/inputs/Button'
import Link from '@comps/Link'
import Head from 'next/head'
import useAuth from 'src/hooks/useAuth'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, handleLogout } = useAuth()

  return (
    <>
      <header className="h-[3rem] flex justify-evenly shadow items-center">
        <Link href="/home">Home</Link>
        <Link href="/visual-guide">Guia viusal</Link>
        {isLoggedIn ? (
          <Button
            label="Salir"
            type="button"
            variant="link"
            size="xs"
            onClick={handleLogout}
          />
        ) : (
          <Link href="/signin">Ingresar</Link>
        )}
      </header>
      <main className="min-h-[calc(100vh-6rem)]">{children}</main>
      <footer className="h-[3rem] mt-10 ">Footer</footer>
    </>
  )
}
