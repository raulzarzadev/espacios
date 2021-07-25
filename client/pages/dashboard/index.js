import Button from '@comps/Button'
import ChartBar from '@comps/dashboard/ChartBar'
import ChartLine from '@comps/dashboard/ChartLine'
import PageVisitsCard from '@comps/dashboard/PageVisitsCard'
import Sidebar from '@comps/dashboard/Sidebar'
import StatusCard from '@comps/dashboard/StatusCard'
import TrafficCard from '@comps/dashboard/TrafficCard'
import LayoutDashboard from '@comps/Layout/Dasboard'
import Link from '@comps/Link'

export default function Dashboard() {
  return (
    <>
      <LayoutDashboard>
        <h3 className="text-white font-bold text-4xl">Inicio de dashboard</h3>
        <Link href="/dashboard/espacios">
          <span className='text-white'>Espacios</span>
        </Link>
      </LayoutDashboard>
    </>
  )
}
