import 'react'
import { useUrlState } from 'react-state-url-fragment'
import { useGameOptions } from './useGameOptions.js'

export function useAppState(target) {
  const defaultState = useDefaultState()

  const getLocationHash = React.useCallback(
    () => location.hash.substring(1),
    [location.hash]
  )
  const setLocationHash = React.useCallback(
    (hash) => void (location.hash = hash),
    []
  )
  const handleDecodeError = React.useCallback(
    () => defaultState,
    [defaultState]
  )

  useOnValueChange(getLocationHash)
  return useUrlState({
    getLocationHash,
    handleDecodeError,
    setLocationHash,
  })
}

function useDefaultState() {
  const gameOptions = useGameOptions()
  return React.useMemo(
    () => ({ ...DEFAULT_APP_STATE, gameOptions }),
    [gameOptions]
  )
}

function useOnValueChange(getValue) {
  const [lastValue, setLastValue] = React.useState(getValue)
  const updateIfDifferent = React.useCallback(() => {
    const nextValue = getValue()
    if (!objEquals(lastValue, nextValue)) {
      setLastValue(nextValue)
    }
  }, [getValue])

  React.useEffect(() => {
    const loop = () => {
      updateIfDifferent()
      // polling the prop 3 times per second
      const timeoutId = setTimeout(loop, 300)
      return () => clearTimeout(timeoutId)
    }
    return loop()
  }, [updateIfDifferent])

  return lastValue
}

export function isEmpty(state) {
  const hasCurrentGame = !!state?.currentGame.id
  const hasGameOptions =
    state?.gameOptions != null &&
    !objEquals(state.gameOptions, DEFAULT_APP_STATE.gameOptions)

  return !(hasCurrentGame || hasGameOptions)
}

const DEFAULT_APP_STATE = {
  currentGame: {
    id: null,
    state: null,
  },
  gameOptions: {},
}

// const AppContext = React.createContext(DEFAULT_APP_STATE);

function objEquals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}
