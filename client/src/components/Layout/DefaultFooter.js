import H5 from '@material-tailwind/react/Heading5'
import LeadText from '@material-tailwind/react/LeadText'
import Icon from '@material-tailwind/react/Icon'
import Link from '@comps/Link'

export default function DefaultFooter() {
  const contactsLinks = [
    {
      href: '/',
      icon: <Icon family="font-awesome" name="fab fa-github" />
    }
  ]
  const usefulLinks = [{ href: '/', label: 'Home' }]
  const resourcesLinks = [
    { href: '/', label: 'MIT License' },
    { href: '/contactus', label: 'Contact Us' },
    { href: '/contribute', label: 'Contribute' }
  ]
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">Espacios</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">
                  Easy way to control the spaces of your organization.
                </LeadText>
              </div>
              <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                {contactsLinks.map(({ href, icon }) => (
                  <Link key={href} href={href}>
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                  <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    {usefulLinks.map(({ href, icon, label }) => (
                      <li key={href} className="flex justify-center">
                        <Link size="sm" href={href}>
                          <span className="text-gray-700 hover:text-gray-900 block pb-2 text-sm capitalize font-normal">
                            {label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    {resourcesLinks.map(({ href, icon, label }) => (
                      <li key={href} className="flex justify-center">
                        <Link size='sm' href={href}>
                          <span className="text-gray-700 hover:text-gray-900 block pb-2 text-sm capitalize font-normal">
                            {label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} Material Tailwind by{' '}
                <a
                  href="https://www.creative-tim.com?ref=mtk"
                  className="text-gray-700 hover:text-gray-900 transition-all"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
