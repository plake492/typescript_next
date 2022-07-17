import { urlFor } from '../lib/sanity'

export const getColorVars = ({ cssVarTarget }) => {
  type cssObj = {
    [key: string]: any
  }

  return Array.from(document.styleSheets)
    .filter(
      sheet =>
        sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .reduce(
      (acc, sheet) =>
        (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce(
            (def, rule: cssObj) =>
              (def =
                rule.selectorText === ':root'
                  ? [
                      ...def,
                      ...Array.from(rule.style).filter((name: string) =>
                        name.startsWith(cssVarTarget)
                      )
                    ]
                  : def),
            []
          )
        ]),
      []
    )
}

/**
 *
 * @param rules Accepts Arrays containing a boolean condition at index[0],
 *              followed by a string value at index[1],
 *              and an optional fallback string value at index[2]
 * @returns String of values seperated by a space
 */
export const conditionalClasses = (
  ...rules: (boolean | string | (string | undefined))[][]
) =>
  rules &&
  Array.isArray(rules) &&
  rules
    .map(
      ([condition, style, fallback]: [
        boolean,
        string,
        string | undefined
      ]): string => (condition ? style : fallback || '')
    )
    .join(' ')

export const getImgSize = photo => {
  const photoObj = urlFor(photo)
  const w = parseInt(
    photoObj.options.source.asset._ref.split('-')[2].split('x')[0]
  )
  const h = parseInt(
    photoObj.options.source.asset._ref.split('-')[2].split('x')[1]
  )
  return [w, h]
}
