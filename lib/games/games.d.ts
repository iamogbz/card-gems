interface GAME {
  title: string
  players: {
    max: number
    min: number
  }
  rounds: {
    cards: string[]
  }[]
}

export function load(): Promise<Record<string, GAME>>
