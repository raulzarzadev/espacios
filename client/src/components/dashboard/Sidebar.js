import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Icon from '@material-tailwind/react/Icon'
import H6 from '@material-tailwind/react/Heading6'
import Link from '@comps/Link'

export default function Sidebar() {
  const SIDEBAR_LINKS = [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Espacios', href: '/dashboard/espacios', icon: 'other_houses' },
    {
      label: 'Espacio',
      href: '/dashboard/espacios/new',
      icon: 'add',
      indent: true
    },
    {
      label: 'Sub-Espacios',
      href: '/dashboard/sub-espacios',
      icon: 'category'
    },
    {
      label: 'Sub-Espacio',
      href: '/dashboard/sub-espacios/new',
      icon: 'add',
      indent: true
    },

    {
      label: 'Items',
      href: '/dashboard/items',
      icon: 'workspaces'
    },
    {
      label: 'Item',
      href: '/dashboard/items/new',
      icon: 'add',
      indent: true
    },
    {
      label: 'Consumibles',
      href: '/dashboard/consumables',
      icon: 'sanitizer'
    },
    {
      label: 'Consumible',
      href: '/dashboard/consumables/new',
      icon: 'add',
      indent: true
    },
    { label: 'Viusal Guide', href: '/visual-guide', icon: 'visibility' }
  ]
  const [showSidebar, setShowSidebar] = useState('-left-64')
  const handelHiddeSidebar = () => {
    setShowSidebar('-left-64')
  }
  return (
    <div className="sticky top-0 z-10 ">
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl w-64 z-10 py-4 px-4 transition-all duration-300 bg-blue-300`}
      >
        <div className="flex-col items-stretch flex-nowrap px-0 relative">
          <Link
            href="/"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="gray">Espacios</H6>
          </Link>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              {SIDEBAR_LINKS.map(({ href, icon, label, indent }) => (
                <li key={label} className="rounded-lg mb-2 ">
                  <div className={`${indent && `ml-4`}`}>
                    <Link size='sm' href={href} onClick={handelHiddeSidebar}>
                      <Icon name={icon} size="2xl" />
                      {label}
                    </Link>
                  </div>
                </li>
              ))}
              {/* <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link href="/dasboard/profile">
                <Icon name="account_circle" size="2xl" />
                Company Profile
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
