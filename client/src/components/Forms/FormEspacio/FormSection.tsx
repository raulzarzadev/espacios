import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'

export default function FormSection({
  title = '',
  children,
  id = ''
}: {
  title: string
  children: ReactNode
  id: string
}) {
  return (
    <section className="p-1" id={id}>
      <h3 className="font-bold">{title}</h3>
      <div>{children}</div>
    </section>
  )
}
