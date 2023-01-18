export function cardsBoxShadowStyle({
  cardCount,
  stackLimit,
  shadowColors = DEFAULT_SHADOW_COLORS,
} = {}) {
  const shadowSection = (color, cardIdx = 0, shadowIdx = 0) => {
    // if (!cardIdx) return

    const startY =
      CARD_BORDER_RADIUS * (1 - cardIdx / cardCount) * cardIdx -
      CARD_BORDER_WIDTH
    const shadowY = CARD_BORDER_WIDTH * shadowIdx * 0.6
    const offsetY = startY + shadowY
    const spread = cardIdx * 0.01
    const blur = -(shadowIdx + cardIdx) * 0.01

    return `0 ${offsetY}px ${spread}px ${blur}px ${color}`
  }
  return new Array(Math.min(cardCount, stackLimit))
    .fill()
    .flatMap((_, n) => shadowColors.map((c, i) => shadowSection(c, n, i)))
    .filter(Boolean)
    .join(',')
}

const DEFAULT_SHADOW_COLORS = ['white', 'gray', 'black']
