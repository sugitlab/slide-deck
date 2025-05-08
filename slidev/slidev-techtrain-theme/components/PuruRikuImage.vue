<template>
  <div class="puru-riku-container">
    <img :src="`https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_${puruType}.png?raw=true`" class="puru-image" />
    <img :src="`https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_${rikuType}.png?raw=true`" class="riku-image" />
  </div>
</template>

<script setup>
defineProps({
  puruType: {
    type: String,
    default: 'happy'
  },
  rikuType: {
    type: String,
    default: 'happy'
  }
})
</script>

<style>
.puru-riku-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.puru-image, .riku-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style> 