import Card from '@material-tailwind/react/Card'
import CardRow from '@material-tailwind/react/CardRow'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardStatus from '@material-tailwind/react/CardStatus'
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter'
import Icon from '@material-tailwind/react/Icon'

export default function ESpaciosCard({
  title = 'Espacio 1',
  subTitle = 'Subtitulo',
  description = 'Descripcion',
  image = 'https://placehold.it/350x150',
  link = 'https://google.com',
  color = '#F44336',
  icon = 'lock'
}) {
  return (
    <div className="px-4 mb-10">
      <div className="bg-white rounded-full w-full h-7">

      </div>
    </div>    
  )
}
