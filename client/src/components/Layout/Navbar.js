import { useState } from 'react'
import TWNavbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import Link from '@comps/Link'

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
            <div className="flex flex-col  lg:flex-row lg:items-center text-white">
              <Link href="/login" size="sm">
                Log in
              </Link>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </TWNavbar>
  )
}
