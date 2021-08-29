import Icon from '@comps/Icon'
import Link from '@comps/Link'
export default function ServicioCard({ service = {} }: { service?: object }) {
  return (
    <div className="relative min-w-[15rem] h-15  rounded-2xl flex shadow-xl items-center">
      <div className="w-2/6  rounded-l-2xl text-center text-2xl ">Agua</div>
      <div className="w-3/6 flex flex-col p-1">
          <div className="text-sm  flex items-center justify-evenly">
            <Icon name="document" />
            <span className="text-xs">234KJ234234</span>
          </div>
        <Link href="/">
          <div className="text-sm  flex items-center justify-evenly">
            <Icon name="phone" />
            <span className="text-xs">55433723323</span>
          </div>
        </Link>
      </div>
      <div className="w-1/6 flex justify-center">
        <Link href='/'>
          <Icon name="rigth-arrow" />
        </Link>
      </div>
    </div>
  )
}
