export function useRender() {
  const [count, setCount] = React.useState(0)
  const anew = React.useCallback(() => setCount((c) => c + 1), [])
  return { count, anew }
}
