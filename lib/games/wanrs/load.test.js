import { load } from './load.js'

describe('load', () => {
  it('builds and exports the correct cards for the game', async () => {
    const wanrs = await load()
    expect(wanrs).toMatchInlineSnapshot(`
{
  "players": {
    "max": 12,
    "min": 2,
  },
  "rounds": [
    {
      "cards": [
        "Am I someone you typically connect with?",
        "Are you missing anyone right now and do you think they miss you to?",
        "Ask and answer the next question in a different accent",
        "Do I intimidate you?",
        "Do you think the image you have of yourself matches the image other people see you as?",
        "Explain and include a scale of 1-10 how easily I fall in love, from never bitten to every day",
        "Explain and include a scale of 1-10 how messy you think my car would be?, from cleanest to complete disaster",
        "Explain and include a scale of 1-10 how messy you think my house would be?, from cleanest to complete disaster",
        "Explain and include a scale of 1-10 how messy you think my house would be?, from cleanest to complete disaster",
        "Explain and include a scale of 1-10 how popular you think I was in high school, from no friends to school sweetheart",
        "Explain and include a scale of 1-10 how well plants thrive in my care, from dead in a day to bountifully",
        "Explain and include a scale of 1-10 the worst non-physical pain you have experienced, from barely felt it to can not live with",
        "Explain if you think I am accurately portrayed by my social media",
        "Explain if you think I am usually early, on time or late to events",
        "Explain if you think I do something out of my comfort zone next week and what?",
        "Explain if you think I ever checked the phone of an ex for evidence",
        "Explain if you think I have a biggest weakness",
        "Explain if you think I have a fast food restaurant I would most likely visit soon.",
        "Explain if you think I have a prefered food order and what it is.",
        "Explain if you think I have found my calling, if everyone has to have a calling.",
        "Explain if you think I intimidate others?",
        "Explain if you think I remind you of anyone you know",
        "Explain if you think I seem like a day fowl or a night owl?",
        "Explain if you think I surprised you in anyway",
        "Explain if you think I thing you want most that I can help with",
        "Explain if you think I will find your x on your social feed?",
        "Explain what you think is the area I most qualified to give advice about",
        "Explain what you think is the best lessons being single has taught you? About yourself, others etc.",
        "Explain what you think is the best thing we can create together?",
        "Explain what you think is the choice I would make between coffee or tea person, sweetened or unsweetened?",
        "Explain what you think is the compliment I hear the most",
        "Explain what you think is the defining characteristic about me?",
        "Explain what you think is the dream you let go of?",
        "Explain what you think is the greater fear for you, failure or success?",
        "Explain what you think is the hardest part of what I do for a living",
        "Explain what you think is the hardest thing about me for you to understand?",
        "Explain what you think is the last time you surprised yourself?",
        "Explain what you think is the lesson that took you the longest to un-learn?",
        "Explain what you think is the most attractive non-physical quality about me?",
        "Explain what you think is the most contradictory thing between my presentation and personality?",
        "Explain what you think is the most embarrassing thing that happened to you on a date?",
        "Explain what you think is the most important thing, about me, you learned from our conversation",
        "Explain what you think is the most important thing, about yourself, you learned from our conversation",
        "Explain what you think is the most likely super power I would have",
        "Explain what you think is the most speeding tickets I have gotten",
        "Explain what you think is the most unexplainable thing that happened to you?",
        "Explain what you think is the name I would get tattooed on myself",
        "Explain what you think is the one thing I could do that would drastically improve my life?",
        "Explain what you think is the part(s) of yourself you see in me",
        "Explain what you think is the perfect date",
        "Explain what you think is the perfect day",
        "Explain what you think is the perfect gift for me",
        "Explain what you think is the questions are you trying to answer most in your life right now?",
        "Explain what you think is the reality show I'm most likely to binge watch",
        "Explain what you think is the reason I've ever been fired from a job",
        "Explain what you think is the reason for the first time you fell in love and with who?",
        "Explain what you think is the reason you think we met?",
        "Explain what you think is the subject I thrived in at school and which I failed",
        "Explain what you think is the the most impactful way a stranger ever changed your life?",
        "Explain what you think is the theme song for my life",
        "Explain what you think is the thing I fear the most?",
        "Explain what you think is the thing I need to hear the most now",
        "Explain what you think is the thing I should know about myself that perhaps I'm unaware of?",
        "Explain what you think is the thing I wanted to be as a child?",
        "Explain what you think is the thing I'm most likely to splurge on",
        "Explain what you think is the thing my clothes say about me",
        "Explain what you think is the thing my shoes say about me",
        "Explain what you think is the thing that would make us feel closer?",
        "Explain what you think is the thing you admire most about me?",
        "Explain what you think is the thing you are most passionate about",
        "Explain what you think is the thing you are not currently giving enough time to?",
        "Explain what you think is the thing you could have done better in previous relationships?",
        "Explain what you think is the thing you currently crave more of?",
        "Explain what you think is the thing you lie to yourself about?",
        "Explain what you think is the thing you will most remember about me when this is all over?",
        "Explain what you think is the three words that would describe my type",
        "Explain what you think is the title of your current life chapter",
        "Explain what you think is the way our personalities compliment each other?",
        "Explain what you think is the way to earn your vulnerability",
        "Explain what you think is the way you can become a better person?",
        "Explain what you think is the your younger self would not believe about your life today?",
        "Explain what your book recommendation for me would be?",
        "Explain what your current mood is with 3 words",
        "Explain what your dating advice would be for your younger self",
        "Explain what your dating pet peeves are",
        "Explain what your default reaction to 'how are you' is and how often you answer truthfully?",
        "Explain what your description of me to a stranger would be",
        "Explain what your description of the feeling of being in love with one word?",
        "Explain what your earliest recollection of happiness?",
        "Explain what your emotional age is vs your physical",
        "Explain what your favorite question to be asked on a date or would want to be asked more?",
        "Explain what your favorite song lyric that comes to your mind from the top of your head?",
        "Explain what your favourite answer of mine has been",
        "Explain what your fear was about, for the question you were most afraid of answering",
        "Explain what your feelings are now, in a single word",
        "Explain what your first impression about me was",
        "Explain what your first thing you noticed about me was",
        "Explain what your folks who raised you taught you about love?",
        "Explain what your gift choice for me would be knowing nothing other than what I look like",
        "Explain what your happiest memory of this past year",
        "Explain what your least favorite question to be asked on a date?",
        "Explain what your most recent opinion that you changed your mind on",
        "Explain what your movie recommendation for me would be?",
        "Explain what your number one goal for the next month",
        "Explain what your opinion is on my social media, instagram, tiktok etc.",
        "Explain what your opinion of the first message I sent to you",
        "Explain what your recommendation that I should let go of?",
        "Explain what your three most important things in a relationship are",
        "Finish the sentence: (Both players) Dating is _____________",
        "Finish the sentence: Between the two of us the better texter is _____________",
        "Finish the sentence: If we were a band, our band name would be? _____________",
        "Finish the sentence: Just by looking at you I'd think _____________",
        "Finish the sentence: Only I know that I am _____________",
        "Finish the sentence: Strangers would describe me as _____________",
        "Finish the sentence: most important similarities between us _____________",
        "If you could get to know someone in your life on a deeper level who would it be and why?",
        "If you could have it your way, who would you be with, where and what would you be doing?",
        "Is there an image of yourself you try to project on a first date you wish you could let go of?",
        "Make an assumption about me",
        "What about me intrigues you?",
        "What part of your life works what part of your life hurts?",
        "What's your father's name and one thing you know about him.",
        "What's your mom's name and what is the most beautiful thing about her?",
        "Write a dating bio for the others",
      ],
    },
  ],
  "title": "We Are Not Really Strangers",
}
`)
  })
})
