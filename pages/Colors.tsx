import { useEffect, useState } from 'react'
import { getCssVar } from '../utils/helpers'
import { Shader } from '../components/Shader'
import { ImageComponent } from '../components/ImageComponent'

const Colors: React.FC = (): JSX.Element => {
  const [colors, setColors] = useState(null)
  const [analgColors, setAnalagColors] = useState(null)
  const [monoColors, setMonoColors] = useState(null)
  const [compColors, setCompolors] = useState(null)

  const [specularBlend, setSpecularBlend] = useState(null)
  const [maskBlend, setMaskBelnd] = useState(null)

  useEffect(() => {
    const cssVarTarget = '--bg-'
    const colorVars = getCssVar({ cssVarTarget: cssVarTarget })
    setColors(colorVars)

    const cssVarTargetAnalg = '--analg-bg'
    const analgColorVars = getCssVar({ cssVarTarget: cssVarTargetAnalg })
    setAnalagColors(analgColorVars)

    const cssVarTargetMono = '--mono-bg'
    const monoColorVars = getCssVar({ cssVarTarget: cssVarTargetMono })
    setMonoColors(monoColorVars)

    const cssVarTargetComp = '--comp-bg'
    const compColorVars = getCssVar({ cssVarTarget: cssVarTargetComp })
    setCompolors(compColorVars)
  }, [])

  const options = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ]

  const img = 'landscape/paul-earle-xJ2tjuUHD9M-unsplash.jpg'

  return (
    <>
      <div className="container py-xxxl">
        <h3>Shader</h3>
        <div className="mb-md">
          <div className="select">
            <label>Specular Blend</label>
            <select onChange={e => setSpecularBlend(e.target.value)}>
              {options.map((option, index) => (
                <option key={option + index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-md">
          <div className="select">
            <label>Mask Blend</label>
            <select onChange={e => setMaskBelnd(e.target.value)}>
              {options.map((option, index) => (
                <option key={option + index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <Shader img={img} specularBlend={specularBlend} maskBlend={maskBlend}>
          <ImageComponent
            width={1200}
            height={795}
            src={img}
            priority
            isStaticImage
          />
        </Shader>
      </div>
      <div className="container py-xxxl">
        <div className="pb-xl mb-xl border-bottom">
          <h3>Colors</h3>
        </div>
        <div className="d-flex flex-wrap border">
          {colors?.map((color: string, index: number) => (
            <div
              key={color + index}
              className={`${color.replace(
                '--',
                ''
              )}  mb-none w-min-100 py-md px-md`}
            >
              <p className="small">{color}</p>
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
              className={`${color.replace('--', '')}  w-min-100 py-md px-md`}
            >
              <p className="small">{color}</p>
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
              className={`${color.replace('--', '')}  w-min-100 py-md px-md`}
            >
              <p className="small">{color}</p>
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
              <p className="small">{color}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Colors
