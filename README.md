# Nuxt Phaser

This plugin empower your game using nuxt.

# Why Vue and Nuxt?

With Nuxt we can make web development simple and powerful, using these features:

- Build
- Tests
- Plugins (like Workbox, GTM, Adsense, ...)

## Setup

- Add `nuxtjs-phaser` dependency using yarn or npm to your project

```
npm install nuxtjs-phaser --save-dev
yarn add --dev nuxtjs-phaser
``` 

- Add `nuxtjs-phaser` to `plugins` section of `nuxt.config.js`
```js
  plugins: [
      { src: 'node_modules/nuxtjs-phaser', mode: 'client' }
  ],
```

## Usage
### Loading phaser manually

You can load phaser on your component, what time you want:
```js
const myGame = new Phaser.Game()
this.$phaser.start(myGame)
```

### Loading phaser by component

You can load phaser using vue component:
```tsx
import PhaserGame from 'nuxtjs-phaser/dist/phaserGame'

<div>
    <PhaserGame :createGame="createGame" />
<div>
```

### Project sample

Check this project sample.

https://github.com/williampsena/nuxt-phaser-example