import { useState, useEffect } from 'react'

interface CodeString {
  codeString: string
}

export const CodeSnip: React.FC<CodeString> = ({
  codeString
}: CodeString): JSX.Element => {
  const [showIsCopied, setShowIsCopied] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowIsCopied(false)
    }, 5000)

    return () => window.clearTimeout(id)
  }, [showIsCopied])

  return (
    <code className="d-flex justify-content-between">
      <div className="d-flex">
        {codeString.split(' ').map(
          (item, index, arr): JSX.Element => (
            <div key={item + index}>
              <span
                className="c-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText(item)
                  setShowIsCopied(true)
                }}
              >
                {item}
              </span>
              {index !== arr.length - 1 && (
                <span key={item + index} className="mx-md">
                  |
                </span>
              )}
            </div>
          )
        )}
      </div>
      {showIsCopied && (
        <div className="bg-lake-60 px-md py-sm mnt-sm mnb-sm mnr-lg border-rounded">
          Copied To Clipboard!
        </div>
      )}
    </code>
  )
}
