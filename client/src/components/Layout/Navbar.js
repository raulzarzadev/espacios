import { useState } from 'react'
import TWNavbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import NavLink from '@material-tailwind/react/NavLink'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import Icon from '@material-tailwind/react/Icon'
import Link from '@comps/Link'
import Button from '@comps/Button'

export default function Navbar({ navigation, ...props }) {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <TWNavbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <Link href="/">
            <NavbarBrand>Espacios</NavbarBrand>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            {navigation.map(({ label, href }) => (
              <Link key={label} href={href}>
                <span className="text-white">{label}</span>
              </Link>
            ))}
 
            <div className="flex flex-col z-50 lg:flex-row lg:items-center text-white">
          <Link href='/login    '>Log in</Link>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </TWNavbar>
  )
}
