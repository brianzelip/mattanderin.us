# 1. Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.1. [0.13.0] - 2019-10-03

### 1.1.1. Meta

- branch: slideshow
- description: Implement mvp custom slideshow based on my quick and dirty hero carousel. M's feedback asked about "making it full screen". So what I'm planning to do is ship this branch, then start another where the idea is to combine TheSlideShowGallery.vue and a modal component that opens at whichever image the user clicked on from the gallery, and that allows the user to scroll through the rest of the gallery images, all presented in high def full screen.

### 1.1.2. Added

- masonry-layout as dependency
- TheSlideShowGallery.vue: Used masonry to try a gallery layout, need to implement [imagesLoaded](https://imagesloaded.desandro.com/) as per the [masonry docs](https://masonry.desandro.com/layout.html#imagesloaded)

### 1.1.3. Updated

- TheSlideShow.vue: Renamed TheSlideShowOfLove.vue; implemented my own carousel from scratch! Screenshot:

![mvp slideshow of love](./img/slideshow-mvp.gif)

## 1.2. [0.12.1] - 2019-09-27

### 1.2.1. Meta

- branch: dev
- description: Add more wedding party content from shared data
  - [photos](https://drive.google.com/drive/folders/1E747-zTgCDxZkHcus5s0jg0JG8JExmeD)
  - [text](https://docs.google.com/document/d/16_Llvm-oVSAyYiXIfDTX-_v11xQz9lYcSwpYAGcMS8k)

### 1.2.2. Added

- img/: Bridesmaids and groomsmen photos, plus the two hero images cropped by Matt

### 1.2.3. Updated

- TheWeddingParty.vue: Add new content markup and css selectors

## 1.3. [0.12.0] - 2019-09-26

### 1.3.1. Meta

- branch: party-layout
- description: Make a better wedding party layout for the images and text flow

### 1.3.2. Added

- humans.txt

### 1.3.3. Updated

- img/: Cropped out distracting content from a couple photos
- ThePage.vue: Control responsive font size from this parent component for all pages, not just wedding party
- TheWeddingParty: Control page-specific display and image flow, refactor font-sizing styles out to parent
- TheRSVP: Update prose, refactor out h2 font size to parent
- index.html: Add link to humans.txt

## 1.4. [0.11.0] - 2019-09-23

### 1.4.1. Meta

- branch: responsive
- description: Need to design the site's responsiveness to smaller devices.

In particular:

- the hero image and how it works with the header
- will likely need to make the home page header have a background color
- time to make my first real drop down header nav menu for mobile?

~~TheHero.html's background-position impacts the need for TheHeader's .bg-lighten class.~~

Decided to remove the .bg-lighten class in favor of making the buttons on hover have light text on dark background. This allows for the photo to take precedence and not have pesky unnatural color.

Deciding to play around with the main header and nav layout after looking through 3rd party wedding site templates, etc.

- thinking about a left top header and vertical left side navigation, which implies a vertical split of the overall desktop viewport into left and right panels, where the non-hero page content goes on the right side.

  - Refactored the header content into a single column div
    - changed the h1 font size and family to the body's Baskerville, but put it in italics
    - make two sets of h2 to stack on top of eachother
    - add an hr between headings and nav
    - display .button's as block to sharply define the single column on hover
  - I think this is a nice nav approach, looks nice with the large italic h1, with a nice simple design that has a bold line for break up and a branding based in popular book styles!
  - Have to figure out how to handle all header text color on each hero context
  - Made the easiest (ie: least code, least fighting against the browser) flex header & page layout, with sticky header, and an inline-block (on Hero) - like effect between header and page via commit #1577a613b
  - Am going with a menu button approach to mobile, as well as abbreviating headings innerHTML on mobile too. Have to figure out the menu page overlay when menu button is clicked.
  - Added the menu overlay, which slides out from the right side. Used https://firefly-iii.org/ as a reference, which is similar to the w3schools' "Sidenav overlay", but uses margin and negative margin instead of width to show and hide the overlay.
    - There's a problem with the menu closing when on the home page and another page is selected. Since the hero and the pages are currently different router views, the menu closing from the hero page when a page is clicked is not a smooth sliding close, but an abrupt disappearing close. Making the hero a page could work - just have to figure out how to make the background image wrapper come after the <header>, whereas on the current hero, the <header> is a child of the background-image wrapper. [problem fixed as of commit b5752808]
  - Had to make the nav menu a two column layout to avoid the problem of overflowed menu items not showing up on mobile in horizontal mode. With the one column, the RSVP menu item could not be displayed since it fell beneath the viewport and is inside a fixed element. I tried to solve it using [this !SO answer for a 3 div implementation](https://stackoverflow.com/a/50976613/2145103), but it didn't work. So I decided to just go w/ the two column layout.
  - Decided to change the mobile nav menu button to have no text, and with a circle background around the hamburger a la material design.
  - Now that the mobile header is created for the smallest viewport, I need to make the next larger views:
    - bigger phone
    - tablet
    - then desktop
    - then larger desktop? (I think Matt has some wide monitors)
  - Commit at which the nav mobile header is right for smallest viewport: #5b13b8c4
  - Created the following breakpoints
    - screen and (min-width: 480px)
    - screen and (min-width: 780px)
    - screen and (min-width: 960px)
    - screen and (min-width: 1024px)
    - screen and (min-width: 960px) and (min-height: 550px)
  - Commit #facc00fbc contains what I think is the finalization of the responsive branch work 🎉
  - M & E like the Italianno font for the site <h1> better than the italicized Baskerville. The h1 font-size and margin-bottom needed tweaking with the different font at each breakpoint. See commit #862e8a729 for finalized design for review by M & E.
  - reverted the mobile nav toggle button to always have .bg-soft-black and .soft-white. The commit prior to this w/ the inverse colors on home page was #7778c1583.

### 1.4.2. Added

- TheNavMobile.vue: Trying different design ideas to make something. Instead, I've been liking some design examples from Squarespace, namely:
  - https://emily-vansant-mf3z.squarespace.com/
  - https://graceandtasa.squarespace.com/#home
  - http://www.fivesixseventeen.com/
  - https://aubrey-demo.squarespace.com/?nochrome=false
  - And getting some mobile flyout nav insight from https://www.w3schools.com/howto/howto_js_sidenav.asp#
- TheHeader2.vue: Horizontal header layout, with larger container, and nav items aligned in the middle horizontally with h1/h2
- TheHeader3.vue: Header layout from the top left down in vertical fashion
- TheNavHeader3.vue: Vertical nav layout in the top left corner
- Table of contents herein, via huntertran.auto-markdown-toc VS Code extension

### 1.4.3. Updated

- TheNav.vue:
  - Add box-shadow to sticky nav, via the homepage of the awesome [Tania Rascia](https://www.taniarascia.com/)
  - Update `button:hover`'s background color and color
- ALL FILES!

### 1.4.4. Deleted

- All files associated w/ the prior design iteration

## 1.5. [0.10.2] - 2019-08-14

### 1.5.1. Meta

- branch: dev
- description: Update page heights, let rsvp user know they will receive an email after submission

### 1.5.2. Updated

- all page components

## 1.6. [0.10.1] - 2019-08-14

### 1.6.1. Meta

- branch: dev
- description: Update the header h1 markup so that it is not a link on the home page. This stemmed from the fact that, after you clicked away from the initial hero image on the home page, then clicked the home page link, the hero image did not revert back to the initial hero image. This solution is easier then snaking custom event messages through the component tree.

### 1.6.2. Added

- TheHeaderH1.vue - abstracted h1 markup out of TheHeader

### 1.6.3. Updated

- TheHeader.vue - registered TheHeaderH1, and use v-if/else to conditionally put a router-link around the h1

## 1.7. [0.10.0] - 2019-08-14

### 1.7.1. Meta

- branch: hero-images
- description: There are a handful of images that would make good landing page heros. Let's update TheHero.vue so that Matt and Erin can toggle through the set of doable images. (aka, let's build a carousel!)

### 1.7.2. Added

- TheHeroImagesControl.vue

### 1.7.3. Updated

- TheHero.vue - created my first carousel in writing the control component, and writing the logic to traverse through a list 🎉
  - I also came across the unfortunate experience of using inline style bindings to set background-image does not work. Not sure if the problem is vue or parcel. When you bind inline styles, the url to the image does not get updated to the new built url; when you set it via normal html attr inline styles (no binding), or via a style block, then the bg image is set.

## 1.8. [0.9.1] - 2019-08-13

### 1.8.1. Meta

- branch: dev
- description: The smaller honey form footprint does not work :(. I say this because the form fields in the netlify forms dashboard are all blank.
  I'm going to reput the honey form into index.html to fix this

### 1.8.2. Deleted

- TheRSVPHoneyForm.vue

### 1.8.3. Updated

- index.html
- TheRSVP.vue

## 1.9. [0.9.0] - 2019-08-13

### 1.9.1. Meta

- branch: email
- description: Update the email response sent after RSVP submission

### 1.9.2. Added

- TheRSVPHoneyForm.vue

### 1.9.3. Updated

- zapier zap
- index.html: removed hidden form for netlify
- TheRSVP.vue: add hidden form for netlify (thereby only writing the form on one html page)

## 1.10. [0.8.0] - 2019-08-13

### 1.10.1. Meta

- branch: dev
- description: Add user email to RSVP form flow

### 1.10.2. Updated

- TheRSVP.vue - add email section markup and logic
- index.html - add email input

## 1.11. [0.7.0] - 2019-08-13

### 1.11.1. Meta

- branch: submit
- description: Form isn't working yet - need to keep going with [the tutorial](https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/) (tl;dr need to refactor around Vue controlling the form and route push on submit)

### 1.11.2. Added

- TheRSVPFail.vue
- TheRSVPSuccess.vue

### 1.11.3. Updated

- index.html: adding a hidden form with the inputs was key to getting Netlify forms to read the data. Before this change, netlify recognized a submission, but there was no data. [This !so answer](https://stackoverflow.com/a/49859661/2145103) helped out, (which I found via [this comment](http://disq.us/p/1yae84j) in the netlify forms and vue tutorial).
- TheRSVP.vue: this is where all the form data logic and POST happens

## 1.12. [0.6.0] - 2019-08-12

### 1.12.1. Meta

- branch: rsvp
- description: Get the RSVP form up and running
- have to pre-render in order for Netlify forms to work, see https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/

### 1.12.2. Added

- parcel-plugin-prerender
- .prerenderrc

### 1.12.3. Updated

- package\*
- TheRSVP.vue: Add form
- TheNav.vue: Update the sticky nav background color, from transparent to soft-white; now there's no visual conflict between the sticky nav and the scrolling text beneath it.
- TheWeddingParty.vue: use better semantic element for the italicized "fast forward", from `<strong class="italic">`, to `<em>`, to the better `<i>`; see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#%3Ci%3E_vs._%3Cem%3E

## 1.13. [0.5.0] - 2019-08-11

### 1.13.1. Meta

- branch: wedding-party
- description: Let's incorporate the available images and text

### 1.13.2. Updated

- TheWeddingParty.vue

## 1.14. [0.4.0] - 2019-08-11

### 1.14.1. Meta

- branch: pages
- description: Now that we've worked out the nav categories, make a page for each category. This will allow us to easily add an active class to the nav button for each page

### 1.14.2. Added

- TheOurStory.vue
- TheSchedule.vue
- TheLocation.vue
- TheWeddingParty.vue
- TheHoneymoonFund.vue
- TheSlideShow.vue
- TheRSVP.vue

## 1.15. [0.3.0] - 2019-08-06

### 1.15.1. Meta

Erin's going the various pages route (instead of the one-long-page route); this means making a sticky header that is imported only once, and works no matter what other components are, or are not, rendered.

There's a problem with serious scroll jank when rendering the current `<TheHeader>` independent of `<TheHero>`. Here's why:

> The [fixed] element is removed from the normal document flow, _and no space is created for the element in the page layout_.

- https://developer.mozilla.org/en-US/docs/Web/CSS/position#Values

So, the element is there, get's fixed, then disappears so there's a scroll, but then it reappears since offSetTop, then it disappears, then it reappears, etc. Hence the scroll jank.

FIXED by simply adding some bottom margin to the `<header>`!

### 1.15.2. Added

- router.js
- ThePage.vue
- TheBridalParty.vue
- TheHoneyMoon.vue

### 1.15.3. Updated

- TheNav.vue
- TheHeader.vue
- main.js

## 1.16. [0.2.0] - 2019-08-04

### 1.16.1. Meta

- branch: dev
- reason:
  - dev branch will stick arond, to show Erin and Matt the progress and discuss future moves
  - this will get merged with master, to allow for the Vue build to happen on the staging branch to allow it to render the vue app; so when dev work is done, the Splash.vue component will get swapped out for the App.vue component in main.js

### 1.16.2. Added

- Vue architecture, and early design draft

## 1.17. [0.1.1] - 2019-05-27

### 1.17.1. Added

- CHANGELOG.md

<!-- TOC -->

- [Changelog](#changelog)
  - [[0.13.0] - 2019-10-03](#0130---2019-10-03)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.12.1] - 2019-09-27](#0121---2019-09-27)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.12.0] - 2019-09-26](#0120---2019-09-26)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.11.0] - 2019-09-23](#0110---2019-09-23)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
    - [Deleted](#deleted)
  - [[0.10.2] - 2019-08-14](#0102---2019-08-14)
    - [Meta](#meta)
    - [Updated](#updated)
  - [[0.10.1] - 2019-08-14](#0101---2019-08-14)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.10.0] - 2019-08-14](#0100---2019-08-14)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.9.1] - 2019-08-13](#091---2019-08-13)
    - [Meta](#meta)
    - [Deleted](#deleted)
    - [Updated](#updated)
  - [[0.9.0] - 2019-08-13](#090---2019-08-13)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.8.0] - 2019-08-13](#080---2019-08-13)
    - [Meta](#meta)
    - [Updated](#updated)
  - [[0.7.0] - 2019-08-13](#070---2019-08-13)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.6.0] - 2019-08-12](#060---2019-08-12)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.5.0] - 2019-08-11](#050---2019-08-11)
    - [Meta](#meta)
    - [Updated](#updated)
  - [[0.4.0] - 2019-08-11](#040---2019-08-11)
    - [Meta](#meta)
    - [Added](#added)
  - [[0.3.0] - 2019-08-06](#030---2019-08-06)
    - [Meta](#meta)
    - [Added](#added)
    - [Updated](#updated)
  - [[0.2.0] - 2019-08-04](#020---2019-08-04)
    - [Meta](#meta)
    - [Added](#added)
  - [[0.1.1] - 2019-05-27](#011---2019-05-27)
    - [Added](#added)

<!-- /TOC -->
