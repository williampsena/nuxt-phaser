<template>
    <div id='phaser'>
        Phaser
    </div>
</template>

<script type="ts">
import Vue from 'vue'

export default class PhaserGame extends Vue {
    mounted () {
        this.$phaser.start()
    }
}
</script>