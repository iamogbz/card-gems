import { load } from './load.js'

describe('load', () => {
  it('builds and exports the correct cards for the game', async () => {
    const tcwgyd = await load()
    expect(tcwgyd).toMatchInlineSnapshot(`
{
  "players": {
    "max": 12,
    "min": 2,
  },
  "rounds": [
    {
      "cards": [
        "Pick a animal and demonstrate animal without singing / speaking. First to guess correctly picks someone to drink. If no one guesses you drink.",
        "Pick a movie (scene) and demonstrate movie (scene) without singing / speaking. First to guess correctly picks someone to drink. If no one guesses you drink.",
        "Pick a song (melody) and demonstrate song (melody) without singing / speaking. First to guess correctly picks someone to drink. If no one guesses you drink.",
        "Pick a superhero and demonstrate superhero without singing / speaking. First to guess correctly picks someone to drink. If no one guesses you drink.",
        "Player(s) after you, they drink.",
        "Player(s) after you, they drink.",
        "Player(s) before you, they drink.",
        "Player(s) before you, they drink.",
        "Player(s) older than you, they drink.",
        "Player(s) that are attracted to men, they drink.",
        "Player(s) that are attracted to women, they drink.",
        "Player(s) that clap their hands last, they drink.",
        "Player(s) that drank in the last round, they pick someone to drink.",
        "Player(s) that touch their nose last, they drink.",
        "Player(s) vote on who has the biggest hands, they pick someone to drink.",
        "Player(s) vote on who is the biggest alcoholic, they pick someone to drink.",
        "Player(s) vote on who is the biggest ass, they drink.",
        "Player(s) vote on who is the most indecisive, they pick someone to drink.",
        "Player(s) vote on who is the most likely to argue with a stranger, they drink.",
        "Player(s) vote on who is the most likely to be in bed by 10PM, they drink.",
        "Player(s) vote on who is the most likely to dodge drinks, they drink.",
        "Player(s) vote on who is the most likely to get arrested, they drink.",
        "Player(s) vote on who is the most likely to get thrown out a bar, they drink.",
        "Player(s) vote on who is the most likely to own ten cats, they picks everyone else to drink.",
        "Player(s) vote on who is the most likely to spend money on something ridiculous, they drink.",
        "Player(s) vote on who is the most likely to yack, they picks everyone else to drink.",
        "Player(s) vote on who is the nicest, they pick someone to drink.",
        "Player(s) vote on who to drink, they drink.",
        "Player(s) wearing a shirt with buttons, they drink.",
        "Player(s) wearing a watch, they drink.",
        "Player(s) wearing glasses, they drink.",
        "Player(s) wearing jeans, they drink.",
        "Player(s) wearing same color shirt as you, they drink.",
        "Player(s) who are shorter than you, they drink.",
        "Player(s) who are single, they drink.",
        "Player(s) who are taller than you, they drink.",
        "Player(s) who have longer hair than you, they drink.",
        "Player(s) who most recently posted a picture on social media, they drink.",
        "Player(s) who most recently used the bathroom, they drink.",
        "Player(s) with an android phone, they drink.",
        "Player(s) with an apple phone, they drink.",
        "Player(s) with any dietary restriction, they drink.",
        "Player(s) with the biggest ears, they drink.",
        "Player(s) with the longest first name, they drink.",
        "Player(s) with the shortest last name, they drink.",
        "Player(s) with the smallest ears, they drink.",
        "Player(s) without touching anything balance on one leg and last one to fall wins, they pick someone to drink.",
        "Player(s) younger than you, they drink.",
        "Start with you, pick a animal and everyone takes turns saying a different animal. First person to hesitate or repeat a animal drinks.",
        "Start with you, pick a beer brands and everyone takes turns saying a different beer brands. First person to hesitate or repeat a beer brands drinks.",
        "Start with you, pick a color and everyone takes turns saying a different color. First person to hesitate or repeat a color drinks.",
        "Start with you, pick a fruit and everyone takes turns saying a different fruit. First person to hesitate or repeat a fruit drinks.",
        "Start with you, pick a human organ and everyone takes turns saying a different human organ. First person to hesitate or repeat a human organ drinks.",
        "Start with you, pick a ocean animal and everyone takes turns saying a different ocean animal. First person to hesitate or repeat a ocean animal drinks.",
        "Start with you, pick a spice and everyone takes turns saying a different spice. First person to hesitate or repeat a spice drinks.",
        "Start with you, pick a word and everyone takes turns saying a rhyming word. First person to hesitate or repeat a word drinks.",
      ],
    },
  ],
  "title": "These Cards Will Get You Drunk",
}
`)
  })
})
