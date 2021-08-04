import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Icon from '@material-tailwind/react/Icon'
import H6 from '@material-tailwind/react/Heading6'
import Link from '@comps/Link'
import ICONS from 'src/ICONS'
import { useRouter } from 'next/router'
import ActiveLink from '@comps/ActiveLink'

export default function Sidebar() {
  const SIDEBAR_LINKS = [
    {
      href: '/dashboard',
      ...ICONS.dashboard
    },
    {
      href: '/dashboard/espacios',
      ...ICONS.espacios,
      subLinks: [
        {
          href: '/dashboard/espacios/new',
          indent: true,
          ...ICONS.newEspacio
        },
        {
          href: '/dashboard/espacios/sub-espacios',
          ...ICONS.subEspacios
        },
        {
          ...ICONS.newSubEspacio,
          href: '/dashboard/espacios/sub-espacios/new',
          indent: true
        },
        {
          ...ICONS.items,
          href: '/dashboard/espacios/items'
        },
        {
          ...ICONS.newItem,
          href: '/dashboard/espacios/items/new',
          indent: true
        },
        {
          ...ICONS.consumables,
          href: '/dashboard/espacios/consumables'
        },
        {
          ...ICONS.newConsumable,
          href: '/dashboard/espacios/consumables/new',
          indent: true
        }
      ]
    },
    {
      href: '/dashboard/operation',
      ...ICONS.operation
    },
    {
      href: '/dashboard/administration',
      ...ICONS.administration
    },
    {
      ...ICONS.visualGuide,
      href: '/visual-guide'
    }
  ]

  const [showSidebar, setShowSidebar] = useState('-left-64')
  const handelHiddeSidebar = () => {
    setShowSidebar('-left-64')
  }

  const router = useRouter()
  const activeLink = router.pathname
  const espaciosLinks = activeLink.includes('dashboard/espacios')
  console.log('router', espaciosLinks)

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
              {SIDEBAR_LINKS.map(({ href, icon, label, indent, subLinks }) => (
                <li key={label} className={`rounded-lg mb-2  `}>
                  <div
                    className={`${indent && `ml-4 `} ${
                      href === activeLink 
                        ? `bg-red-300`
                        : `bg-transparent`
                    }`}
                  >
                    <Link size="sm" href={href} onClick={handelHiddeSidebar}>
                      <Icon name={icon} size="2xl" />
                      {label}
                    </Link>
                  </div>
                  {espaciosLinks && (
                    <ul>
                      {subLinks?.map(({ href, icon, label, indent }) => (
                        <li key={label} className="rounded-lg mb-2 ">
                          <div
                            className={`${indent && `ml-4`} ${
                              href === activeLink
                                ? `bg-red-300`
                                : `bg-transparent`
                            }`}
                          >
                            <Link
                              size="sm"
                              href={href}
                              onClick={handelHiddeSidebar}
                            >
                              <Icon name={icon} size="2xl" />
                              {label}
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
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
