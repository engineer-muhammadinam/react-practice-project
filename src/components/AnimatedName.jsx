export default function AnimatedName({ text }) {
  const words = text.split(' ')
  let index = 0

  return (
    <span className="inline-block">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={w}>
            {w > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char) => {
                const i = index++
                return (
                  <span key={i} className="name-letter" style={{ '--i': i }}>
                    {char}
                  </span>
                )
              })}
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}