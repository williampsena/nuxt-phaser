<template>
    <div id="phaser"></div>
</template>

<script type="ts">
import Vue from 'vue'

export default {
    props: {
        createGame: { required: true },
    },
    data: () => ({
        game: undefined,
    }),
    mounted() {
        this.$nextTick(() => {
            this.game = this.createGame()
            this.$phaser.initialize(this.game)
        })
    },
    beforeDestroy() {
        if (this.game) this.game.destroy()
    },
}
</script>
