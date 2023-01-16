import React from 'react'
import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { Cards } from './Cards.js'

export function CurrentGame() {
  const [appState] = useAppState('current-game')
  // TODO: use all rounds cards
  const currentDeck = appState.gameOptions[appState.currentGame].rounds[0].cards
  const initialState = {
    discardPile: [],
    drawPile: [...currentDeck],
  }
  const [gameState, setGameState] = React.useState(initialState)
  const handleDrawCard = React.useCallback(
    function drawCardHandler(e) {
      e.preventDefault()
      setGameState((state) => {
        if (!state.drawPile.length) return initialState
        const nextCardIdx = Math.floor(Math.random() * state.drawPile.length)
        const nextCard = state.drawPile[nextCardIdx]
        return {
          discardPile: [nextCard, ...state.discardPile],
          drawPile: state.drawPile.filter((c) => c !== nextCard),
        }
      })
    },
    [setGameState]
  )

  const drawPileNode = html`<${Cards}
    className="draw-pile"
    count=${gameState.drawPile.length}
    onClick=${handleDrawCard}
  />`

  const discardPileNode = html`<${Cards}
    className="discard-pile"
    count=${gameState.discardPile.length}
    content=${gameState.discardPile[0] ?? DISCARD_PILE_PLACEHOLDER_TEXT}
  />`

  return html`<${GameTable}>${drawPileNode}${discardPileNode}</${GameTable}>`
}

function GameTable({ style, ...props }) {
  const tableStyle = {
    display: 'flex',
    flexFlow: 'row',
    gridGap: '8px',
    ...props.style,
  }
  return html`<div className="game-table" style=${tableStyle}>
    ${props.children}
  </div>`
}

const DISCARD_PILE_PLACEHOLDER_TEXT = 'Discard Pile'
