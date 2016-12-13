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
 - Too much switching between frameworks (vanilla everything, react, riot, hapi, ramda), these should have been decided from the outset

 So, I am considering the old project as my spike

 New Project stack:

#### Front
* Rollup with gulp for front end
* Ramda
* Riot
* Redux

#### Back
* Express
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
