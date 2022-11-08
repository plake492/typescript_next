interface FormTypes {
  children: React.ReactNode
  onSubmit: Function
}
export default function Form({ children, onSubmit }: FormTypes): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }
  return <form onSubmit={handleSubmit}>{children}</form>
}
