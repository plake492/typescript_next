import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { SectionContainer } from '../components/SectionContainer'
import { conditionalClasses } from '../utils/helpers'

const validateInput = (value: string): boolean => !!value.length

export default function Inputs(): JSX.Element {
  const [text, setText] = useState('')
  const [textIsValid, setTextIsValid] = useState(false)
  const [textIsTouched, setTextIsTouched] = useState(false)

  useEffect((): void => {
    const isValid: boolean = validateInput(text)
    setTextIsValid(isValid)
  }, [text])

  const testError = async (err = true) =>
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (err) reject('Error State')
        else resolve('success')
      }, 2000)
    })

  const getGithub = async () => {
    const res = await fetch('https://api.github.com/users/plake492/repos')
    const data = await res.json()
    console.log('data==>>', data)
    return data
  }

  return (
    <main>
      <SectionContainer title="Inputs" bgColor="bg-violet">
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
      </SectionContainer>
      <SectionContainer title="Buttons" bgColor="bg-white">
        <div className="d-flex gap-col-md flex-wrap">
          <Button text="Button" />
          <Button text="Secondary" btnType="secondary" />
          <Button
            text="Tertiary"
            btnType="tertiary"
            iconOnRight
            icon="arrow-right"
          />
          <Button icon="envelop" />
          <Button icon="sliders" btnType="secondary" />
        </div>
      </SectionContainer>
      <SectionContainer title="Buttons" bgColor="bg-slate-grey-30">
        <div className="d-flex gap-col-md flex-wrap">
          <Button
            text="Button"
            icon="sliders"
            onClick={() => testError(true)}
          />
          <Button text="Secondary" onClick={testError} btnType="secondary" />
          <Button text="TERTIARY" btnType="tertiary" icon="arrow-right" />
          <Button text="Button" block />
          <Button text="Secondary" btnType="secondary" block />
          <Button icon="envelop" text="Error Test" onClick={testError} />
          <Button
            text="Get Repos"
            icon="github"
            btnType="secondary"
            onClick={() => testError(false)}
            iconOnRight
          />
          {/* <Button
            onClick={() => testError(false)}
            icon="sliders"
            btnType="secondary"
          />
          <Button icon="plus" />
          <Button icon="download" btnType="secondary" text="Download" /> */}
        </div>
      </SectionContainer>
    </main>
  )
}
