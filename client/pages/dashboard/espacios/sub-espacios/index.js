import SubEspaciosTable from '@comps/dashboard/subEspacios/SubEspaciosTable'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
export default function SubEspacios() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/sub-espacios')
      .then(({ data }) => setData(data?.subEspacios))
  }, [])
  return (
    <>
      <h3 className="text-white text-3xl text-center p-6">Sub-Espacios</h3>
      <SubEspaciosTable data={data} />
     
    </>
  )
}
