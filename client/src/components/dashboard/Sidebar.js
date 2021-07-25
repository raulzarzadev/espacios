import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Icon from '@material-tailwind/react/Icon'
import H6 from '@material-tailwind/react/Heading6'
import Link from '@comps/Link'

export default function Sidebar() {
  const SIDEBAR_LINKS = [
    { label: 'Home', href: '/dashboard', icon: 'home' },
    { label: 'Espacios', href: '/dashboard/espacios', icon: 'archive' },
    { label: 'Nuevo Espacio', href: '/dashboard/espacios/new-espacio', icon: 'home' },
  ]
  const [showSidebar, setShowSidebar] = useState('-left-64')
  return (
    <div className="sticky top-0 z-10">
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="gray">Espacios</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              {SIDEBAR_LINKS.map(({ href, icon, label }) => (
                <li key={label} className="rounded-lg mb-4">
                  <Link href={href}>
                    <Icon family="font-awesome" name={icon} size="2xl" />
                    {label}
                  </Link>
                </li>
              ))}
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link href="/dasboard/profile">
                  <Icon name="account_circle" size="2xl" />
                  Company Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
