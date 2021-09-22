import DetailsServiceRecord from "./DetailsServiceRecord"
import NewServiceRecord from "./NewServiceRecord"

const SeriviceHistory = ({ records = [] }: { records: Array<any> }) => {
  return (
    <section id="images" className="flex  max-w-[90vw] overflow-auto mx-auto">
      <NewServiceRecord />
      {records?.map((record, i) => (
        <div key={record.id} className="w-20 h-20 m-1">
          <DetailsServiceRecord record={record} />
        </div>
      ))}
    </section>
  )
}
export default SeriviceHistory