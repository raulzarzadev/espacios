import Link from '@comps/Link'
import Button from '@material-tailwind/react/Button'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import Icon from '@material-tailwind/react/Icon'
import Image from '@material-tailwind/react/Image'
import NavbarInput from '@material-tailwind/react/NavbarInput'
//import ProfilePicture from 'assets/img/team-1-800x800.jpg'
import { useRouter } from 'next/dist/client/router'

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useRouter().pathname

  return (
    <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar(true)}
          >
            <Icon name="menu" size="2xl" color="white" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar ? 'left-64' : '-left-64'
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar(false)}
            >
              <Icon name="close" size="2xl" color="white" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          {/*  <h4 className="uppercase text-white text-xs tracking-wider mt-1 mr-1">
            {location === '/'
              ? 'DASHBOARD'
              : location?.toUpperCase().replace('/', '')}
          </h4> */}

          <div className="flex justify-end w-full">
            {/*  <NavbarInput placeholder="Search" /> */}
            <div className="">
              <Link href="/login">login</Link>
            </div>
            {/*             <div className="-mr-4 ml-6">
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="w-12">
                    <Image src={'favicon.ico'} rounded alt=''/>
                  </div>
                }
                rounded
                style={{
                  padding: 0,
                  color: 'transparent'
                }}
              >
                <DropdownItem color="lightBlue">Action</DropdownItem>
                <DropdownItem color="lightBlue">Another Action</DropdownItem>
                <DropdownItem color="lightBlue">Something Else</DropdownItem>
              </Dropdown>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
