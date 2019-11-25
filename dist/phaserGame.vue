<template>
    <div id="phaser"></div>
</template>

<script type="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        createGame: { required: true },
    },
    data: () => ({
        game: undefined
    }),
    mounted() {
        this.game = this.createGame()
        this.$phaser.start(this.game)
    },
    beforeDestroy() {
        if(this.game) this.game.destroy(true, true)
    },
})
</script>