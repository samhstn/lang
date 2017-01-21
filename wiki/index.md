## Project stack:
* [Elm](http://elm-lang.org/)       <---- The next big front end framework
* [Hapi](https://hapijs.com/)      <---- A node frameword suited for the scale of the project
* [Redis](https://redis.io/)     <---- For caching of client tokens and other short term data
* [Postgres](https://www.postgresql.org/)  <---- For reliable data storage
* [Co](https://github.com/tj/co) & [bluebird](http://bluebirdjs.com/docs/getting-started.html)        <---- Look to harness the power of generators
* [Ramda](http://ramdajs.com/)     <---- this more represents the coding style which will be employed in the backend

## Definitions

* question: The question side of a card
* answer: The answer side of a card
* hint: A clue shown on the answer side of the card (optional)
* card: The grouping of the question, answer and hint
* deck: The grouping of cards
* tag: A label attached to each card

## User stories
* As a first time user without a vocab list, I would like to be able to be tested on an initial deck
* As a first time user, I would like to be able to register to store my own decks
* As a registered user, I would like to be able to log in and view my decks
* As a user, I would like to be able to be tested on saved decks
* As a user being tested, I would like to be able to see a question, click to get the answer and say if I got it right, wrong or not sure.
* As a user, I would like to know how the system works in terms of repeated viewing of words I got right or wrong.

## Endpoints

* Create deck (affects only name and description) - post :: /deck
* Edit deck (affects only name and description) - put :: /deck
* Delete deck - delete :: /deck
* Get all decks (less info than for a specific deck) - get :: /deck
* Get specific deck - get :: /deck/{deck\_id}
* Create word - post :: /word
* Edit word - put :: /word
* Delete word - delete :: /word
* Edit settings (can be for a specific deck) - put :: /settings
* Update deck results - put :: /result

## Views

* demo (play around with a few default decks)
* about (explaining how it all works)
* login (be able to log in to your account)
* register (be able to register for an account)
* dashboard (a summary of your account with a list of all decks)
* edit (editing a specific deck)
* practice (practicing on a specific deck)
* settings (change settings for all decks or a specific deck)

