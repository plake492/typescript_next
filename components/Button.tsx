import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import { conditionalClasses } from '../utils/helpers'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

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
}

/**
 *
 * @param param0
 * @returns
 */
export default function Button({
  text,
  btnType,
  icon,
  block,
  onClick,
  iconOnRight,
  removeActionState,
  clearActionState,
  type = 'button'
}: ButtonTypes): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const textRef = useRef()

  const clearLoadingStates = () => {
    setSuccess(false)
    setError(false)
  }

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>

    if ((text && !icon) || (clearActionState && (success || error)))
      id = setTimeout(() => clearLoadingStates(), 2500)

    return () => clearTimeout(id)
  }, [text, icon, clearActionState, success, error])

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
        [!!icon, `btn--icon icon--${icon}`],
        [block, `btn--block`],
        [!!icon && iconOnRight, 'btn--icon-right'],
        [
          !icon && text && !removeActionState && (loading || success || error),
          'btn--icon'
        ]
      )} ${
        !removeActionState
          ? conditionalClasses(
              [loading || success || error, 'btn--icon'],
              [loading, 'icon--loading'],
              [success, 'icon--success'],
              [error, 'icon--error']
            )
          : ''
      }`.trim()}
      type={type}
    >
      {/* <SwitchTransition mode="out-in">
        <CSSTransition
          key={loading || success || error}
          nodeRef={textRef}
          timeout={200}
          classNames="transitions__page"
          unmountOnExit
          addEndListener={done => {
            textRef.current.addEventListener('transitionend', done, false)
          }}
        >
          <span ref={textRef}> */}
      {!!icon && text
        ? text
        : !icon && text && (loading || success || error)
        ? ' '
        : text}
      {/* </span>
        </CSSTransition>
      </SwitchTransition> */}
    </button>
  )
}
