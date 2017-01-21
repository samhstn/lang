# LANG

### What

Another language learning app.

I have used a few of the big language learning apps, but have been frustrated with the lack of customisability or features.

My favorite language learning app is [Anki](https://github.com/dae/anki) which looks to employ [srs](https://eastasiastudent.net/study/what-is-srs/) better than any other application and has amazing customisability.

But it has a steep learning curve and only becomes an amazing tool after spending hours reading the rather long [documentation](https://apps.ankiweb.net/docs/manual.html#studying).

Some tooling is clunky to use and really isn't user friendly.

### Why

Why am I redoing everything again? Havn't I started the same project [here](https://github.com/shouston3/le)?

I am redoing this project because I made too many architechural mistakes:

 - The code style was too inconsistent
 - There was too much of a mix in the levels of abstraction
 - The naming conventions were quite bad
 - The api was too rushed and didn't suit what the front end was looking for
 - There was too much of a mix between promises and callbacks
 - There should have been more planning with a folder structure and what functions I will need
 - There should be far more planning in terms of user experience and wire framing
 - Too much switching between frameworks (from vanilla everything to react, then riot, then switching to hapi), these should have been decided from the outset
 - The tests did not describe thir functions well enough

So, I am considering the old project as my spike. I also feel that redoing everything will make for better code quality and won't take that long.

### How

To get started read through the `wiki`. I have decided to keep the wiki in `.md` format as to be able to keep track of changes to documentation
