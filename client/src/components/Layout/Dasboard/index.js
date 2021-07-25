/* This example requires Tailwind CSS v2.0+ */
import Sidebar from '@comps/dashboard/Sidebar'


export default function LayoutDashboard({ children }) {
  return (
    <>
      <Sidebar />
      <div className="md:pl-64 ">
        {children}
      </div>
    </>
  )
}
