import React from 'react'

export function useRandomId(props) {
  const id = React.useId()
  return React.useMemo(
    () => `${props.prefix ?? ''}${id}${props.suffix ?? ''}`,
    [id, props.prefix, props.suffix]
  )
}

// function randomString(length = 8) {
//   let buffer = ''
//   while (buffer.length < length) {
//     buffer += (Math.random() + 1)
//       .toString(36)
//       .slice(2, 2 + (length - buffer.length))
//   }
//   return buffer.toString()
// }
