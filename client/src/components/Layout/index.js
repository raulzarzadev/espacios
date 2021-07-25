/* This example requires Tailwind CSS v2.0+ */
import Navbar from './Navbar'
import DefaultFooter from './DefaultFooter'
import SimpleFooter from './SimpleFooter'
const navigation = [
  { label: 'Guia visual', href: '/visualgide' },
  { label: 'Dashboard', href: '/dashboard' }

]

export default function Layout({ children }) {
  return (
    <div className="bg-blue-200">
      <Navbar navigation={navigation} />
      <main className="bg-landing-background min-h-screen">{children}</main>
      {/*   
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
         */}
      <DefaultFooter />
      <SimpleFooter />
    </div>
  )
}
