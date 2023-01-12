import { Game } from './games'

interface TCWGYD {
  title: string
  players: {
    max: number
    min: number
  }
  rounds: {
    cards: string[]
  }[]
}
