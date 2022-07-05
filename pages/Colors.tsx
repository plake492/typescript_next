import { useEffect, useState } from 'react'
import { getColorVars } from '../utils/helpers'

const Colors = (): JSX.Element => {
  const [colors, setColors] = useState(null)
  const [analgColors, setAnalagColors] = useState(null)
  const [monoColors, setMonoColors] = useState(null)
  const [compColors, setCompolors] = useState(null)

  useEffect(() => {
    const cssVarTarget = '--bg-'
    const colorVars = getColorVars({ cssVarTarget: cssVarTarget })
    setColors(colorVars)

    const cssVarTargetAnalg = '--analg-bg'
    const analgColorVars = getColorVars({ cssVarTarget: cssVarTargetAnalg })
    setAnalagColors(analgColorVars)

    const cssVarTargetMono = '--mono-bg'
    const monoColorVars = getColorVars({ cssVarTarget: cssVarTargetMono })
    setMonoColors(monoColorVars)

    const cssVarTargetComp = '--comp-bg'
    const compColorVars = getColorVars({ cssVarTarget: cssVarTargetComp })
    setCompolors(compColorVars)
  }, [])

  return (
    <>
      <div className="container py-xxxl">
        <div className="pb-xl mb-xl border-bottom">
          <h3>Colors</h3>
        </div>
        <div className="d-flex flex-wrap">
          {colors?.map((color: string, index: number) => (
            <div
              key={color + index}
              className={`${color.replace(
                '--',
                ''
              )} card w-min-100 py-md px-md`}
            >
              <p className="small">Lorem ipsum dolor sit amet,</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-xxxl">
        <div className="pb-xl mb-xl border-bottom">
          <h3>Analgous Colors</h3>
        </div>
        <div className="d-flex flex-wrap">
          {analgColors?.map((color: string, index: number) => (
            <div
              key={color + index}
              className={`${color.replace(
                '--',
                ''
              )} card w-min-100 py-md px-md`}
            >
              <p className="small">Lorem ipsum dolor sit amet,</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-xxxl">
        <div className="pb-md mb-md border-bottom">
          <h3>Monochromatic Colors</h3>
        </div>
        <div className="d-flex flex-wrap">
          {monoColors?.map((color: string, index: number) => (
            <div
              key={color + index}
              className={`${color.replace(
                '--',
                ''
              )} card w-min-100 py-md px-md`}
            >
              <p className="small">Lorem ipsum dolor sit amet,</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-xxxl">
        <div className="pb-md mb-md border-bottom">
          <h3>Complementry Colors</h3>
        </div>
        <div className="d-flex flex-wrap">
          {compColors?.map((color: string, index: number) => (
            <div
              key={color + index}
              className={`${color.replace(
                '--',
                ''
              )} card w-min-100 py-md px-md`}
            >
              <p className="small">Lorem ipsum dolor sit amet,</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Colors
