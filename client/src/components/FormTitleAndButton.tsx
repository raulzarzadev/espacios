import Division from './Division'
import Button from './inputs/Button'

export default function FormTitleAndButton({
  label = '',
  title = '',
  onClick = () => {},
  loading = false,
  disabled = false,
  hiddeButton = false
}) {
  return (
    <div className="">
      <div className="flex w-full p-1 pb-0 items-center">
        <h3 className="flex w-full text-xl font-bold  ">{title}</h3>
        {!hiddeButton && (
          <Button
            disabled={disabled}
            loading={loading}
            type="button"
            label={label}
            size="sm"
            onClick={onClick}
          />
        )}
        <div></div>
      </div>
      <div className="w-[90%] mx-auto">
        <Division />
      </div>
    </div>
  )
}
