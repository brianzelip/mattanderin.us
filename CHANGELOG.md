# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2019-08-

### Meta

Erin's going the various pages route; this means making a sticky header that is imported only once, and works no matter what other components are or are not rendered.

There's a problem with serious scroll jank when rendering the current <TheHeader> independent of <TheHero>. Here's why:

> The element is removed from the normal document flow, _and no space is created for the element in the page layout_.

- https://developer.mozilla.org/en-US/docs/Web/CSS/position#Values

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
