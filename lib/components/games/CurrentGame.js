import React from 'react'
import { html } from '../../deps/html.js'
import { shuffle } from '../../utils/shuffle.js'
import { useAppState } from '../hooks/useAppState.js'
import { Card } from './Card.js'
import { CardPicker } from './CardPicker.js'

export function CurrentGame() {
  const [appState, setAppState] = useAppState('current-game')
  const currentGameOptions = appState.gameOptions[appState.currentGame.id]
  const currentDeck = currentGameOptions.rounds[0].cards

  const initState = React.useCallback(
    () => ({
      // TODO: use all rounds cards
      currentDeck: shuffle(currentDeck),
      drawnCards: {},
      lastDrawnCardIdx: null,
    }),
    [currentDeck]
  )

  const hasDrawnAllCards = React.useCallback(
    (state) => state.currentDeck.length === countDrawnCards(gameState),
    []
  )

  const createGameState = React.useCallback(
    (state, nextCardIdx = -1) => {
      if (hasDrawnAllCards(state) && !state.drawnCards[nextCardIdx]) {
        // leave the last drawn card on top until the deck is reshuffled
        return state.lastDrawnCardIdx
          ? { ...state, lastDrawnCardIdx: null }
          : initState()
      }
      return {
        ...state,
        drawnCards: { ...state.drawnCards, [nextCardIdx]: true },
        lastDrawnCardIdx: nextCardIdx,
      }
    },
    [hasDrawnAllCards, initState]
  )

  const gameState = appState.currentGame.state ?? initState()
  const setGameState = React.useCallback(function setGameState(state) {
    setAppState((appState) => ({
      ...appState,
      currentGame: { ...appState.currentGame, state },
    }))
  }, [])
  React.useEffect(() => setGameState(gameState), [])

  const handleDrawCard = React.useCallback(
    function drawCardHandler(e) {
      e.preventDefault()
      onSelect(
        // select only from deck that has not been drawn
        gameState.currentDeck
          .map((_, i) => i)
          .filter((i) => !gameState.drawnCards[i])
          .sort(() => 0.5 - Math.random())
          .pop()
      )
    },
    [gameState, setGameState]
  )
  const onSelect = React.useCallback(
    function handleSelect(nextCardIdx) {
      // TODO: use the initial indexes for the draw pile
      setGameState(createGameState(gameState, nextCardIdx))
    },
    [createGameState, gameState, setGameState]
  )

  return html`<${GameWrapper}>
    <${GameTitle}>${currentGameOptions.title}</${GameTitle}>
    <${Card}
      className="draw-pile"
      content=${
        gameState.currentDeck[gameState.lastDrawnCardIdx] ??
        (hasDrawnAllCards(gameState) ? SHUFFLE_CTA_TEXT : DRAW_CTA_TEXT)
      }
      onClick=${handleDrawCard}
      placeholder=${hasDrawnAllCards(gameState) || !countDrawnCards(gameState)}
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

function countDrawnCards(gameState) {
  return Object.keys(gameState.drawnCards).length
}

const DRAW_CTA_TEXT = 'Draw Random Card'
const SHUFFLE_CTA_TEXT = 'Shuffle Entire Deck'
