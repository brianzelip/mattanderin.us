# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2019-08-11

### Meta

- branch: rsvp
- description: Get the RSVP form up and running
- have to pre-render in order for Netlify forms to work, see https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/

### Added

### Updated

- TheRSVP.vue: Add form
- TheNav.vue: Update the sticky nav background color, from transparent to soft-white; now there's no visual conflict between the sticky nav and the scrolling text beneath it.
- TheWeddingParty.vue: use better semantic element for the italicized "fast forward", from `<strong class="italic">`, to `<em>`, to the better `<i>`; see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#%3Ci%3E_vs._%3Cem%3E

## [0.5.0] - 2019-08-11

### Meta

- branch: wedding-party
- description: Let's incorporate the available images and text

### Updated

- TheWeddingParty.vue

## [0.4.0] - 2019-08-11

### Meta

- branch: pages
- description: Now that we've worked out the nav categories, make a page for each category. This will allow us to easily add an active class to the nav button for each page

### Added

- TheOurStory.vue
- TheSchedule.vue
- TheLocation.vue
- TheWeddingParty.vue
- TheHoneymoonFund.vue
- TheSlideShow.vue
- TheRSVP.vue

## [0.3.0] - 2019-08-06

### Meta

Erin's going the various pages route (instead of the one-long-page route); this means making a sticky header that is imported only once, and works no matter what other components are, or are not, rendered.

There's a problem with serious scroll jank when rendering the current `<TheHeader>` independent of `<TheHero>`. Here's why:

> The [fixed] element is removed from the normal document flow, _and no space is created for the element in the page layout_.

- https://developer.mozilla.org/en-US/docs/Web/CSS/position#Values

So, the element is there, get's fixed, then disappears so there's a scroll, but then it reappears since offSetTop, then it disappears, then it reappears, etc. Hence the scroll jank.

FIXED by simply adding some bottom margin to the `<header>`!

### Added

- router.js
- ThePage.vue
- TheBridalParty.vue
- TheHoneyMoon.vue

### Updated

- TheNav.vue
- TheHeader.vue
- main.js

## [0.2.0] - 2019-08-04

### Meta

- branch: dev
- reason:
  - dev branch will stick arond, to show Erin and Matt the progress and discuss future moves
  - this will get merged with master, to allow for the Vue build to happen on the staging branch to allow it to render the vue app; so when dev work is done, the Splash.vue component will get swapped out for the App.vue component in main.js

### Added

- Vue architecture, and early design draft

## [0.1.1] - 2019-05-27

### Added

- CHANGELOG.md
