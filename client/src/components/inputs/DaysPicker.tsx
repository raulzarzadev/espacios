import { useEffect } from 'react'
import { useState } from 'react'

export default function DaysPicker({
  defaultDays,
  handleChange = () => {}
}: {
  defaultDays?: any
  handleChange?: (field: string, value: any) => void
}) {
  const days = [
    { label: 'Do', value: 0 },
    { label: 'Lu', value: 1 },
    { label: 'Ma', value: 2 },
    { label: 'Mi', value: 3 },
    { label: 'Ju', value: 4 },
    { label: 'Vi', value: 5 },
    { label: 'Sa', value: 6 }
  ]
  const [selectedDays, setSelectedDays] = useState(defaultDays)
  const handleClickDay = (day: number) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d: any) => d !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  useEffect(() => {
    handleChange('trashDays', selectedDays)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDays])

  return (
    <div className="max-w-sm mx-auto">
      <div className="grid gap-4 grid-flow-col">
        {days.map((day) => (
          <button
            key={day.value}
            className={`w-10 h-10 flex items-center justify-center rounded-md shadow-lg 
            ${selectedDays.includes(day.value) && `bg-third`}
            `}
            onClick={() => handleClickDay(day.value)}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  )
}
