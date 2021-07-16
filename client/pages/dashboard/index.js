import Button from '@comps/Button'
import ChartBar from '@comps/dashboard/ChartBar'
import ChartLine from '@comps/dashboard/ChartLine'
import PageVisitsCard from '@comps/dashboard/PageVisitsCard'
import Sidebar from '@comps/dashboard/Sidebar'
import StatusCard from '@comps/dashboard/StatusCard'
import TrafficCard from '@comps/dashboard/TrafficCard'
import Link from '@comps/Link'

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <div className=" px-3 md:px-8 md:pl-72 pt-10">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <h1 className="text-white text-7xl text-center">
              Dashboard inicio
            </h1>
            <div className="text-white">
              <Link href='/dashboard/espacios'>Espacios</Link>{' '}
            </div>
            {/*   <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            /> */}
          </div>
        </div>
      </div>

      {/* <div className="px-3 md:px-8 h-auto md:pl-72 ">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <TrafficCard />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
