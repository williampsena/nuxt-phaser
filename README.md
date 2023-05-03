# Nuxt Phaser

![workflow](https://github.com/williampsena/nuxt-phaser/actions/workflows/main.yml/badge.svg)

This plugin empowers your game using Vue/Nuxt.

# Why Vue and Nuxt?

With Vue/Nuxt you can make web development simple and powerful, using these features:

- Build
- Tests
- Plugins (like Workbox, GTM, Adsense, ...)

## Setup

- Add `nuxtjs-phaser` dependency using yarn or npm to your project

```
npm install nuxtjs-phaser --save
yarn add nuxtjs-phaser
``` 

- Add `nuxtjs-phaser` to `plugins` section of `nuxt.config.js`
```js
  plugins: [
      { src: 'node_modules/nuxtjs-phaser', mode: 'client' }
  ],
```

## Usage
### Loading phaser manually

You can load phaser on your component, where and how you want:

```js
const myGame = new Phaser.Game()
this.$phaser.initialize(myGame)
```

### Loading phaser by component

You can load phaser using vue component:

```vue
import PhaserGame from 'nuxtjs-phaser/dist/phaserGame.vue'

<div>
    <PhaserGame :createGame="createGame" />
<div>
```

### Phaser Events

Phaser uses has own Event Emitter, this plugin allows you to emit and listen to events between Vue (Nuxt) and Phaser.

```js
// listen events
this.$phaser.eventEmitter.addListener('jump', ({ superJump = false }) => {
  myPlayer.jump(superJump)
}, this)

// emit events with args
this.$phaser.eventEmitter.emit('jump', { superJump: false })
```

## Built-in Events

- pause
> Pause a scene.
```js
// emit events with args
this.$phaser.eventEmitter.emit('pause', 'level')
```

- resume
> Resume a scene.
```js
// emit events with args
this.$phaser.eventEmitter.emit('resume', 'level')
```

- restart
> Restart a scene.
```js
// emit events with args
this.$phaser.eventEmitter.emit('restart', 'default')
```

## Project sample

Check out this project sample.

https://github.com/williampsena/nuxt-phaser-example