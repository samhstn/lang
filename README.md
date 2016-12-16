# LANG

Another language learning app

Why am I redoing everything again? Havn't I started the same project [here](https://github.com/shouston3/le)?

Because I made too many architechural mistakes:

 - The code style was too inconsistent
 - There was too much of a mix in the levels of abstraction
 - The naming conventions were quite bad
 - The api was too rushed and didn't suit what the front end was looking for
 - There was too much of a mix between promises and callbacks
 - There should have been more planning with a folder structure and what functions I will need
 - There should be far more planning in terms of user experience and wire framing
 - Too much switching between frameworks (from vanilla everything to react, then riot, then switching to hapi), these should have been decided from the outset
 - The tests did not describe thir functions well enough

 So, I am considering the old project as my spike

## New Project stack:

#### Front
* Rollup with gulp for front end
* Ramda
* Riot
* Redux

#### Back
* Hapi
* Redis
* Pg
* Ramda

#### Testing

###### Front
* Karma
* Mocha
* Chai
* Sinon

###### Back
* Mocha
* Chai
* Sinon
* Shot

## Definitions

* question: The question
* answer: The answer to the question
* hint (optional): An added help to get the answer from the question
* card: The grouping of the question, answer and hint
* deck: The grouping of cards

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

