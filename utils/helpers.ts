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
