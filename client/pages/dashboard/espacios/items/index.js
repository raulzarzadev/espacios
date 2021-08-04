import ItemsTable from '@comps/dashboard/Items/ItemsTable'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Items() {
  useEffect(() => {
    axios.get('/api/items').then(({ data }) => setItems(data?.items))
  }, [])
  const [items, setItems] = useState([])

  console.log('items', items)
  
  return (
    <div>
      <ItemsTable data={items} />
    </div>
  )
}
