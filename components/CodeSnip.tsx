interface CodeString {
  codeString: string
}

export const CodeSnip: React.FC<CodeString> = ({
  codeString
}: CodeString): JSX.Element => (
  <code>
    {codeString.split(' ').map(
      (item, index, arr): JSX.Element => (
        <>
          <span key={item + index}>{item}</span>
          {index !== arr.length - 1 && (
            <span key={item + index} className="mx-md">
              |
            </span>
          )}
        </>
      )
    )}
  </code>
)
