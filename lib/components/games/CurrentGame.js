import React from 'react'
import { html } from '../../deps/html.js'
import { useAppState } from '../hooks/useAppState.js'
import { Cards } from './Cards.js'

export function CurrentGame() {
  const [appState] = useAppState('current-game')
  const currentGame = appState.gameOptions[appState.currentGame]
  const initialState = React.useMemo(
    () => ({
      discardPile: [],
      // TODO: use all rounds cards
      drawPile: [...currentGame.rounds[0].cards],
    }),
    [appState.currentGame]
  )
  const createGameState = React.useCallback(
    (state, nextCardIdx) => {
      if (!state.drawPile.length) return initialState
      const nextCard = state.drawPile[nextCardIdx % state.drawPile.length]
      if (!nextCard) return state
      return {
        discardPile: [nextCard, ...state.discardPile],
        drawPile: state.drawPile.filter((c) => c !== nextCard),
      }
    },
    [initialState]
  )

  const [gameState, setGameState] = React.useState(initialState)
  const handleDrawCard = React.useCallback(
    function drawCardHandler(e) {
      e.preventDefault()
      setGameState((state) =>
        createGameState(
          state,
          Math.floor(Math.random() * state.drawPile.length)
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

  const drawPileNode = html`<${Cards}
    className="draw-pile"
    count=${gameState.drawPile.length}
    onClick=${handleDrawCard}
    content=${gameState.drawPile.length
      ? undefined
      : DRAW_PILE_PLACEHOLDER_TEXT}
  />`

  const discardPileNode = html`<${Cards}
    className="discard-pile"
    count=${gameState.discardPile.length}
    content=${gameState.discardPile[0] ?? DISCARD_PILE_PLACEHOLDER_TEXT}
  />`

  return html`<div>
    <${GameTitle}>${currentGame.title}</${GameTitle}>
    <${CardPicker} count=${gameState.drawPile.length} onSelect=${onSelect} />
    <${GameTable}>${drawPileNode}${discardPileNode}</${GameTable}>
  </div>`
}

function GameTitle({ style, ...props }) {
  const inlineStyle = {
    ...style,
    backgroundColor: 'white',
    margin: 0,
    padding: '8px',
    position: 'absolute',
    top: 0,
  }
  return html`<h2 style=${inlineStyle} ...${props} />`
}

function CardPicker(props) {
  const cardNumberInputRef = React.useRef()
  const onPickBtnClick = React.useCallback(
    function onPickBtnClick(e) {
      e.preventDefault()
      props.onSelect(parseInt(cardNumberInputRef.current.value) - 1)
      cardNumberInputRef.current.value = ''
    },
    [cardNumberInputRef.current]
  )
  const wrapperStyle = {
    padding: '32px 8px',
    display: 'flex',
    gridGap: '8px',
  }
  const inputStyle = {
    padding: '8px 12px',
    margin: 0,
    border: 'solid 2px black',
    borderRadius: '4px',
  }
  return html`<div style=${wrapperStyle}>
    <input
      style=${{ ...inputStyle, flexGrow: 1 }}
      type="number"
      min=${1}
      max=${props.count}
      ref=${cardNumberInputRef}
      placeholder="Enter random number between ${1} and ${props.count}"
    />
    <button
      style=${{ ...inputStyle, cursor: 'pointer' }}
      onClick=${onPickBtnClick}
    >
      ${SHOW_CARD_TEXT}
    </button>
  </div>`
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
const DRAW_PILE_PLACEHOLDER_TEXT = '♼ Draw Pile ♼'
const SHOW_CARD_TEXT = 'Show'
