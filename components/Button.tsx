import React, { useState, useEffect, MouseEvent } from 'react'
import SvgSymbol from './SvgSymbol'
import Loader from './Loader'
import { conditionalClasses } from '../utils/helpers'

interface ButtonTypes {
  text?: string
  btnType?: 'primary' | 'secondary' | 'tertiary' | 'icon-only'
  icon?: string
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: Function
  actionState?: boolean
  iconOnRight?: boolean
  removeActionState?: boolean
  clearActionState?: boolean
  formSuccess?: boolean | undefined
  formError?: boolean | undefined
  formLoading?: boolean | undefined
}

export default function Button({
  text,
  btnType,
  icon,
  block,
  onClick,
  iconOnRight,
  removeActionState,
  clearActionState,
  formSuccess,
  formError,
  formLoading,
  type = 'button'
}: ButtonTypes): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [btnIcon, setBtnIcon] = useState(icon)
  const [textToShow, setTextToShow] = useState('')
  const [feedback, setFeedback] = useState('')

  // Show and then clear success / error message on btn
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>

    if ((text && !icon) || (clearActionState && (success || error)))
      id = setTimeout(() => {
        setSuccess(false)
        setError(false)
      }, 2500)

    return () => clearTimeout(id)
  }, [text, icon, clearActionState, success, error])

  useEffect(() => {
    if (formError !== undefined) {
      setError(formError)
    }
    if (formSuccess !== undefined) {
      setSuccess(formSuccess)
    }
    if (formLoading !== undefined) {
      setLoading(formLoading)
    }
  }, [formError, formSuccess, formLoading])

  useEffect(() => {
    // Handle Icon
    if (icon && !success && !error) {
      setBtnIcon(icon)
    } else if (success) {
      setBtnIcon('circle-check')
    } else if (error) {
      setBtnIcon('circle-x')
    } else if (!icon && !success && !error && !loading) {
      setBtnIcon(null)
    }

    // Handle Text
    if (!!icon && text) {
      setTextToShow(text)
    } else if (!icon && text && (loading || success || error)) {
      setTextToShow(' ')
    } else {
      setTextToShow(text)
    }

    if (loading && (success || error)) {
      setSuccess(false)
      setError(false)
    }
  }, [icon, success, error, loading, text])

  // Effect for adding feedback animations on fetching states
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>

    if (error) {
      setFeedback('shake')
    }
    if (success) {
      setFeedback('scale-up')
    }

    id = setTimeout(() => {
      setFeedback('')
    }, 750)

    return () => clearTimeout(id)
  }, [error, success])

  const handleClick = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      if (removeActionState) {
        await onClick(event)
      } else {
        setLoading(true)
        await onClick(event)
        setLoading(false)
        setSuccess(true)
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
      setError(true)
    }
  }

  return (
    <button
      onClick={!!onClick ? handleClick : null}
      className={`btn ${conditionalClasses(
        [!!btnType, `btn--${btnType}`],
        [!!icon, 'btn--icon'],
        [block, `btn--block`],
        [!!icon && iconOnRight, 'btn--icon-right'],
        [icon && !text, 'btn--icon-only'],
        [error, 'btn--error'],
        [success, 'btn--success'],
        [feedback, `animate--${feedback}`],
        [
          !icon && text && !removeActionState && (loading || success || error),
          'btn--icon'
        ]
      )} 
      ${
        !removeActionState
          ? conditionalClasses([loading || success || error, 'icon'])
          : ''
      }
      `
        .trim()
        .replace(/ +/g, ' ')}
      type={type}
    >
      {loading ? (
        <div className="icon">
          <Loader />
        </div>
      ) : btnIcon ? (
        <SvgSymbol icon={btnIcon} viewBox="0 0 16 16" />
      ) : null}
      {textToShow}
    </button>
  )
}
