export default function Select({
  value,
  onChange,
  options = [],
  disabled,
  placeholder,
  label,
  name
}) {
  return (
    <label>
      {label}
      <select name={name} onChange={onChange} value={value} disabled={disabled}>
        {placeholder && <option value="">{placeholder}</option>}
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
