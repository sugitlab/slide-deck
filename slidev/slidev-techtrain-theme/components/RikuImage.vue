<template>
  <img :src="`https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_${type}.png?raw=true`" class="riku-image" />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'happy'
  }
})
</script>

<style>
.riku-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0 auto;
  margin-top: 40px;
}
</style> 