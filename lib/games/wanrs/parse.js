import { mapBy } from '../../utils/mapBy.js'
import { replaceAll } from '../../utils/replaceAll.js'

export { parseWANRS as parse }

function parseWANRS(wanrsMD = '') {
  const gameMd = wanrsMD.trim()
  const stripEmpties = (ss = ['']) => ss.map((s) => s.trim()).filter(Boolean)

  const [sectionA, sectionB] = stripEmpties(gameMd.split(GAME_SECTION_TOKEN))
  const cardTypes = mapBy(
    stripEmpties(sectionB.split('\n')).slice(1).map(parseCardType),
    (a) => a.type
  )
  const [gameTitle, ...gameCards] = stripEmpties(
    sectionA
      .split('\n')
  )
  const cards = gameCards
    .filter((s) => s.includes(CARD_TYPE_REPLACEMENT_TOKEN_OPEN))
    .flatMap((cardLine) => parseCardLine(cardLine, cardTypes))
    .sort()

  return {
    title: gameTitle,
    players: {
      max: PLAYER_COUNT_MAX,
      min: PLAYER_COUNT_MIN,
    },
    rounds: [{ cards }],
  }
}

function parseCardType(_MD = '') {
  const typeMd = _MD.trim()
  const type = typeMd.substring(0, 1)
  const text = typeMd.substring(3)
  const replacements = text
    .split(CARD_TYPE_REPLACEMENT_TOKEN_OPEN)
    .filter((s) => s.includes(CARD_TYPE_REPLACEMENT_TOKEN_CLOSE))
    .map((s) => s.split(CARD_TYPE_REPLACEMENT_TOKEN_CLOSE)[0])

  return {
    replacements,
    text,
    type,
  }
}

function parseCardLine(_MD = '', cardTypes = {}) {
  let textMd = _MD.trim()
  let count = 1
  let cardType = null

  if (textMd.startsWith(CARD_TYPE_REPLACEMENT_TOKEN_OPEN)) {
    const endIdx = textMd.indexOf(CARD_TYPE_REPLACEMENT_TOKEN_CLOSE)
    cardType = textMd.substring(1, endIdx)
    textMd = textMd.substring(endIdx + 2).trim()
  }

  if (textMd.startsWith(CARD_TYPE_OCCURRENCE_TOKEN_OPEN)) {
    const endIdx = textMd.indexOf(CARD_TYPE_OCCURRENCE_TOKEN_CLOSE)
    count = Number.parseInt(textMd.substring(1, endIdx))
    textMd = textMd.substring(endIdx + 2).trim()
  }

  const cardText = `${cardTypes[cardType]?.text ?? textMd}`.trim()
  const cardTextReplacers = textMd
    .split(CARD_TEXT_REPLACER_TOKEN_DELIMITER)
    .map((s) => s.trim())
  const textReplacements = Object.fromEntries(
    cardTypes[cardType]?.replacements
      .filter((_, i) => cardTextReplacers[i])
      .map((v, i) => [`[${v}]`, cardTextReplacers[i]]) ?? []
  )
  const card = replaceAll(cardText, textReplacements)

  return Array(count).fill(card)
}

const CARD_TEXT_REPLACER_TOKEN_DELIMITER = ';'
const CARD_TYPE_OCCURRENCE_TOKEN_CLOSE = '}'
const CARD_TYPE_OCCURRENCE_TOKEN_OPEN = '{'
const CARD_TYPE_REPLACEMENT_TOKEN_CLOSE = ']'
const CARD_TYPE_REPLACEMENT_TOKEN_OPEN = '['
const GAME_SECTION_TOKEN = '#'
const PLAYER_COUNT_MAX = 12
const PLAYER_COUNT_MIN = 2
