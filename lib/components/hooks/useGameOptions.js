import React from 'react'
import { load } from '../../games/games.js'

let __GAME_OPTIONS__ = undefined

export function useGameOptions() {
  const [gameOptions, setGameOptions] = React.useState(__GAME_OPTIONS__)

  React.useEffect(() => {
    if (__GAME_OPTIONS__) return
    load()
      .then((r) => (__GAME_OPTIONS__ = r))
      .then(setGameOptions)
  }, [])

  return gameOptions
}
