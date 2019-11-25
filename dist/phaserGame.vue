<template>
    <div id="phaser">Phaser</div>
</template>

<script type="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        game: { required: true },
    },
    mounted() {
        this.$phaser.start(this.game)
    },
})
</script>