# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.11.0] - 2019-08-2

### Meta

- branch: responsive
- description: Need to design the site's responsiveness to smaller devices.

In particular:

- the hero image and how it works with the header
- will likely need to make the home page header have a background color
- time to make my first real drop down header nav menu for mobile?

~~TheHero.html's background-position impacts the need for TheHeader's .bg-lighten class.~~

Decided to remove the .bg-lighten class in favor of making the buttons on hover have light text on dark background. This allows for the photo to take precedence and not have pesky unnatural color.

### Added

- TheNavMobile.vue: Trying different design ideas to make something. Instead, I've been liking some design examples from Squarespace, namely:
  - https://emily-vansant-mf3z.squarespace.com/
  - https://graceandtasa.squarespace.com/#home
  - http://www.fivesixseventeen.com/
  - https://aubrey-demo.squarespace.com/?nochrome=false
  - And getting some mobile flyout nav insight from https://www.w3schools.com/howto/howto_js_sidenav.asp#

### Updated

- TheNav.vue:
  - Add box-shadow to sticky nav, via the homepage of the awesome [Tania Rascia](https://www.taniarascia.com/)
  - Update `button:hover`'s background color and color

## [0.10.2] - 2019-08-14

### Meta

- branch: dev
- description: Update page heights, let rsvp user know they will receive an email after submission

### Updated

- all page components

## [0.10.1] - 2019-08-14

### Meta

- branch: dev
- description: Update the header h1 markup so that it is not a link on the home page. This stemmed from the fact that, after you clicked away from the initial hero image on the home page, then clicked the home page link, the hero image did not revert back to the initial hero image. This solution is easier then snaking custom event messages through the component tree.

### Added

- TheHeaderH1.vue - abstracted h1 markup out of TheHeader

### Updated

- TheHeader.vue - registered TheHeaderH1, and use v-if/else to conditionally put a router-link around the h1

## [0.10.0] - 2019-08-14

### Meta

- branch: hero-images
- description: There are a handful of images that would make good landing page heros. Let's update TheHero.vue so that Matt and Erin can toggle through the set of doable images. (aka, let's build a carousel!)

### Added

- TheHeroImagesControl.vue

### Updated

- TheHero.vue - created my first carousel in writing the control component, and writing the logic to traverse through a list 🎉
  - I also came across the unfortunate experience of using inline style bindings to set background-image does not work. Not sure if the problem is vue or parcel. When you bind inline styles, the url to the image does not get updated to the new built url; when you set it via normal html attr inline styles (no binding), or via a style block, then the bg image is set.

## [0.9.1] - 2019-08-13

### Meta

- branch: dev
- description: The smaller honey form footprint does not work :(. I say this because the form fields in the netlify forms dashboard are all blank.
  I'm going to reput the honey form into index.html to fix this

### Deleted

- TheRSVPHoneyForm.vue

### Updated

- index.html
- TheRSVP.vue

## [0.9.0] - 2019-08-13

### Meta

- branch: email
- description: Update the email response sent after RSVP submission

### Added

- TheRSVPHoneyForm.vue

### Updated

- zapier zap
- index.html: removed hidden form for netlify
- TheRSVP.vue: add hidden form for netlify (thereby only writing the form on one html page)

## [0.8.0] - 2019-08-13

### Meta

- branch: dev
- description: Add user email to RSVP form flow

### Updated

- TheRSVP.vue - add email section markup and logic
- index.html - add email input

## [0.7.0] - 2019-08-13

### Meta

- branch: submit
- description: Form isn't working yet - need to keep going with [the tutorial](https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/) (tl;dr need to refactor around Vue controlling the form and route push on submit)

### Added

- TheRSVPFail.vue
- TheRSVPSuccess.vue

### Updated

- index.html: adding a hidden form with the inputs was key to getting Netlify forms to read the data. Before this change, netlify recognized a submission, but there was no data. [This !so answer](https://stackoverflow.com/a/49859661/2145103) helped out, (which I found via [this comment](http://disq.us/p/1yae84j) in the netlify forms and vue tutorial).
- TheRSVP.vue: this is where all the form data logic and POST happens

## [0.6.0] - 2019-08-12

### Meta

- branch: rsvp
- description: Get the RSVP form up and running
- have to pre-render in order for Netlify forms to work, see https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/

### Added

- parcel-plugin-prerender
- .prerenderrc

### Updated

- package\*
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
