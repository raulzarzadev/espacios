import Icon from '@material-tailwind/react/Icon'

export default function ItemCard({ addCard, onClick = () => {}, item }) {
  return (
    <div>
      {addCard ? (
        <AddCard onClick={onClick} />
      ) : (
        <NormalCard item={item} onClick={onClick} />
      )}
    </div>
  )
}

const NormalCard = ({ item, onClick }) => {
  const bgFile = item?.files[0]
  const { title } = item
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
        style={{ backgroundImage: `URL(${bgFile})` }}
        className={` relative w-28 h-40 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 bg-cover `}
      >
        <div className="absolute bottom-4 left-0 right-0 font-bold text-white bg-gray-700">
          {title}
        </div>
      </button>
    </div>
  )
}

const AddCard = ({ onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className="  w-28 h-40 border-4 border-dashed hover:border-blue-300 border-blue-100 rounded-xl flex items-center justify-center "
    >
      <Icon name="add" size="6xl" color="blue" />
    </button>
  )
}
