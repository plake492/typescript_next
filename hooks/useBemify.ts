import { useMemo } from 'react'

// Some quick helper methods becuase laziness...
const isStr = (str: string | string[]): boolean => typeof str === 'string'

const bemify =
  (block: string): Function =>
  (element: string | undefined, ...classes: (string | boolean)[]) => {
    // We combine the block and element or return the block itself
    const combined: string = element ? `${block}__${element}` : block

    const formedClasses: string[] =
      classes && classes.length
        ? classes
            .map((c: string) => {
              // make sure there is no funny business
              if (!c) return null

              // Initialize the base classname
              let className: string = isStr(c) ? c : ''

              // Ensure that classname is always a string
              if (!isStr(className)) className = ''

              // Finally Check for a modifier class
              if (className?.startsWith('--')) className = combined + className

              return className
            })
            .filter(c => !!c)
        : []

    // Join the classes into a big array and then combine them
    return [combined, ...formedClasses].join(' ')
  }

// Let's make a hook that makes this easier to use. We can wrap it in a useMemo so we don't have to waste resources by instantiating it on every render
export const useBemify = (block: string) =>
  useMemo(() => bemify(block), [block])

/*
  This is a helpful utility function that makes class concatenation in react easier

  Calling the bemify function returns a function with the Block value accessible via closures

  const bem = bemify("card") // This creates a function that can be called so we don't have to retype the base name
  The first param this new bem function takes is the element name and all other argumrnts are classes to be concatenated

  1. Pass no params and get just the block name
  bem()
    => "card"

  2. Pass a single argument and get the block + element
  bem("photo")
    => "card__photo"

  3. Pass a second argument to be concatenated
  bem("button", "disabled")
    => "card__button disabled"

  4. Pass as many classes as you want
  bem("button", "rounded", "outlined", "disabled")
    => "card__button rounded outlined disabled"
*/
