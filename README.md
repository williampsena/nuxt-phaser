# Nuxt Phaser

This plugin empower yout game using nuxt.

# Why Vue and Nuxt?

With Nuxt we can make web development simple and powerful, using these features:

- Build
- Tests
- Plugins (like Workbox, GTM, Adsense, ...)

## Setup

- Add `@nuxtjs/phaser` dependency using yarn or npm to your project

```
npm install @nuxtjs/phaser --save-dev
yarn add --dev @nuxtjs/phaser
``` 

- Add `@nuxtjs/phaser` to `modules` section of `nuxt.config.js`
```js
  modules: [
   ['@nuxtjs/phaser', { game: '~/game' }],
  ]
```

## Usage
### Loading phaser manually

You can load phaser on your component, what time you want:
```js
this.$phaser.start()
```

### Loading phaser by component

You can load phaser using vue component:
```tsx
// import PhaserGame from '@nuxt/phaser/phaserGame'

<div>
    <PhaserGame />
<div>
```