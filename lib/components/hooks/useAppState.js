import 'react'
import { useUrlState } from 'react-state-url-fragment'
import { useGameOptions } from './useGameOptions.js'
import { useRender } from './useRender.js'

export function useAppState(target) {
  const defaultState = useDefaultState()
  const render = useRender()

  const getLocationHash = React.useCallback(
    () => location.hash.substring(1),
    [location.hash]
  )
  const setLocationHash = React.useCallback(
    (hash) => void ((location.hash = hash), render.anew()),
    []
  )
  const handleDecodeError = React.useCallback(
    () => defaultState,
    [defaultState]
  )

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

export function isEmpty(state) {
  const hasCurrentGame = state?.currentGame != DEFAULT_APP_STATE.currentGame
  const hasGameOptions =
    state?.gameOptions != null &&
    !objEquals(state.gameOptions, DEFAULT_APP_STATE.gameOptions)

  return !(hasCurrentGame || hasGameOptions)
}

const DEFAULT_APP_STATE = {
  currentGame: null,
  gameOptions: {},
}

// const AppContext = React.createContext(DEFAULT_APP_STATE);

function objEquals(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}
