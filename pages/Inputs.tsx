import React, { useState, useEffect } from 'react'

const validateInput = (value: string): boolean => !!value.length

const Inputs = (): JSX.Element => {
  const [text, setText] = useState('')
  const [textIsValid, setTextIsValid] = useState(false)
  const [textIsTouched, setTextIsTouched] = useState(false)

  useEffect((): void => {
    const isValid: boolean = validateInput(text)
    setTextIsValid(isValid)
  }, [text])

  return (
    <div>
      <div className="container">
        <div className="input mb-xxl">
          <label>Testing</label>
          <input
            type="text"
            value={text}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>): void =>
              setText(target.value)
            }
            onBlur={(): void => setTextIsTouched(true)}
          />
        </div>
        <h5>{text}</h5>
        {!textIsValid && textIsTouched && <h1>ERROR!</h1>}
      </div>
    </div>
  )
}

export default Inputs
