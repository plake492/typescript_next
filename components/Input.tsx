import React, { MouseEvent, ChangeEvent, FocusEvent } from 'react'
import SvgSymbol from './SvgSymbol'
import { useBemify } from '../hooks/useBemify'
import { conditionalClasses } from '../utils/helpers'

interface InputType {
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  label: string
  id: string
  value: string | number
  onChange: Function
  onBlur?: Function
  onClick?: Function
  placeholder?: string
  name?: string
  hideLabel?: boolean
  isReadOnly?: boolean
  prependIcon?: string
  appenndIcon?: string
}

export default function Input({
  type,
  label,
  value,
  placeholder,
  id,
  name,
  hideLabel,
  onChange,
  onBlur,
  onClick,
  isReadOnly,
  prependIcon,
  appenndIcon
}: InputType): JSX.Element {
  const bem = useBemify('input')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (onBlur) {
      onBlur(e)
    }
  }

  const handleOnClick = (e: MouseEvent<HTMLInputElement>): void => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div className={bem()}>
      <label
        className={conditionalClasses([hideLabel, 'sr-only'])}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={bem('main', [!!prependIcon || !!appenndIcon, 'input__icon'])}
      >
        {prependIcon ? (
          <div className="border-right flex-center pr-sm mr-sm">
            <SvgSymbol icon={prependIcon} viewBox="0 0 16 16" />
          </div>
        ) : null}
        <input
          className={bem('field')}
          value={value}
          onBlur={handleOnBlur}
          onChange={handleChange}
          onClick={handleOnClick}
          id={id}
          type={type}
          placeholder={placeholder}
          name={name || id}
          readOnly={isReadOnly}
        />
        {appenndIcon ? (
          <div className="border-left flex-center pl-sm ml-sm">
            <SvgSymbol icon={appenndIcon} viewBox="0 0 16 16" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
