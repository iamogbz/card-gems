import React from 'react'
import { html } from '../../deps/html.js'
import { shuffle } from '../../utils/shuffle.js'
import { useAppState } from '../hooks/useAppState.js'
import { Card } from './Card.js'
import { CardPicker } from './CardPicker.js'

export function CurrentGame() {
  const [appState] = useAppState('current-game')
  const currentGame = appState.gameOptions[appState.currentGame]
  const currentDeck = currentGame.rounds[0].cards

  const initState = React.useCallback(
    () => ({
      // TODO: use all rounds cards
      currentDeck: shuffle(currentDeck),
      drawnCards: new Set(),
      lastDrawnCardIdx: null,
    }),
    [currentDeck]
  )

  const hasDrawnAllCards = React.useCallback(
    (state) => state.currentDeck.length === state.drawnCards.size,
    []
  )

  const createGameState = React.useCallback(
    (state, nextCardIdx = -1) => {
      if (hasDrawnAllCards(state) && !state.drawnCards.has(nextCardIdx)) {
        // leave the last drawn card on top until the deck is reshuffled
        return state.lastDrawnCardIdx
          ? { ...state, lastDrawnCardIdx: null }
          : initState()
      }
      return {
        ...state,
        drawnCards: new Set([nextCardIdx, ...state.drawnCards]),
        lastDrawnCardIdx: nextCardIdx,
      }
    },
    [hasDrawnAllCards, initState]
  )

  const [gameState, setGameState] = React.useState(initState)
  const handleDrawCard = React.useCallback(
    function drawCardHandler(e) {
      e.preventDefault()
      setGameState((state) =>
        createGameState(
          state,
          // select only from deck that has not been drawn
          state.currentDeck
            .map((_, i) => i)
            .filter((i) => !state.drawnCards.has(i))
            .sort(() => 0.5 - Math.random())
            .pop()
        )
      )
    },
    [setGameState]
  )
  const onSelect = React.useCallback(
    function handleSelect(nextCardIdx) {
      // TODO: use the initial indexes for the draw pile
      setGameState((state) => createGameState(state, nextCardIdx))
    },
    [createGameState, setGameState]
  )

  return html`<${GameWrapper}>
    <${GameTitle}>${currentGame.title}</${GameTitle}>
    <${Card}
      className="draw-pile"
      content=${
        gameState.currentDeck[gameState.lastDrawnCardIdx] ??
        (hasDrawnAllCards(gameState) ? SHUFFLE_CTA_TEXT : DRAW_CTA_TEXT)
      }
      onClick=${handleDrawCard}
      placeholder=${hasDrawnAllCards(gameState) || !gameState.drawnCards.size}
      width=${312}
    />
    <${CardPicker}
      deck=${gameState.currentDeck}
      drawnCards=${gameState.drawnCards}
      lastDrawnCardIdx=${gameState.lastDrawnCardIdx}
      onSelect=${onSelect} />
  </${GameWrapper}>`
}

function GameWrapper({ style, ...props }) {
  const inlineStyle = {
    ...style,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return html`<div style=${inlineStyle} ...${props} />`
}

function GameTitle({ style, ...props }) {
  const inlineStyle = {
    ...style,
    backgroundColor: 'white',
    margin: 0,
    padding: '32px 8px',
    position: 'relative',
    justifyContent: 'center',
    top: 0,
  }
  return html`<h2 style=${inlineStyle} ...${props} />`
}

const DRAW_CTA_TEXT = 'Draw Random Card'
const SHUFFLE_CTA_TEXT = 'Shuffle Entire Deck'
