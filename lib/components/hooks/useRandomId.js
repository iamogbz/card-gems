import React from 'react'

export function useRandomId(props) {
  return React.useMemo(
    () => `${props.prefix ?? ''}${randomString()}${props.suffix ?? ''}`
  )
}

function randomString(length = 8) {
  let buffer = ''
  while (buffer.length < length) {
    buffer += (Math.random() + 1)
      .toString(36)
      .slice(2, 2 + (length - buffer.length))
  }
  return buffer.toString()
}
