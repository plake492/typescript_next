export const CodeSnip = ({
  codeString
}: {
  codeString: string
}): JSX.Element => (
  <code>
    {codeString.split(' ').map(
      (item, index, arr): JSX.Element => (
        <>
          <span key={item + index}>{item}</span>
          {index !== arr.length - 1 && <span className="mx-md">|</span>}
        </>
      )
    )}
  </code>
)
