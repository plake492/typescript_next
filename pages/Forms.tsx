import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import { SectionContainer } from '../components/SectionContainer'
import { conditionalClasses } from '../utils/helpers'
// import { Accordion } from 'transit-js/cjs'

const validateInput = (value: string): boolean => !!value.length

export default function Forms(): JSX.Element {
  const [gitUser, setGitUser] = useState('')
  const [formError, setFormError] = useState(undefined)
  const [formSuccess, setFormSuccess] = useState(undefined)
  const [formLoading, setFormLoading] = useState(undefined)
  // const [text, setText] = useState('')
  // const [textIsValid, setTextIsValid] = useState(false)
  // const [textIsTouched, setTextIsTouched] = useState(false)

  // useEffect((): void => {
  //   const isValid: boolean = validateInput(text)
  //   setTextIsValid(isValid)
  // }, [text])

  const testError = async (err = true) =>
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (err) reject('Error State')
        else resolve('success')
      }, 2000)
    })

  const handleSubmit = async (): Promise<void> => {
    setFormLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${gitUser}/repos`)
      const data = await res.json()
      console.log('data==>>', data)
      setFormSuccess(true)
      return data
    } catch (err) {
      setFormError(true)
      console.log('err==>>', err)
    } finally {
      setFormLoading(false)
    }
  }

  return (
    <main>
      <SectionContainer title="Inputs" bgColor="bg-violet">
        {/* <Input
          type="text"
          id="test"
          label="Test"
          value={text}
          onChange={({ target }) => setText(target.value)}
        /> */}
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
          <Button
            onClick={() => testError(false)}
            icon="plus"
            btnType="secondary"
          />
          <Button icon="plus" />
          <Button icon="download" btnType="secondary" text="Download" />
        </div>
      </SectionContainer>
      <SectionContainer title="Forms" bgColor="bg-black">
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-col gap-row-md">
            <Input
              type="text"
              id="test"
              label="Github User"
              value={gitUser}
              onChange={({ target }) => setGitUser(target.value)}
            />
            <Input
              appenndIcon="arrow-right"
              prependIcon="envelop"
              type="text"
              id="test"
              label="Name"
              value={gitUser}
              onChange={({ target }) => setGitUser(target.value)}
            />

            <Button
              btnType="primary"
              type="submit"
              icon="github"
              text="Submit"
              formLoading={formLoading}
              formError={formError}
              formSuccess={formSuccess}
            />
          </div>
        </Form>
      </SectionContainer>
    </main>
  )
}
