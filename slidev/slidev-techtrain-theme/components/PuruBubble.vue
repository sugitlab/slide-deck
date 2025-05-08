<template>
  <div class="puru-bubble" :class="[position, type]">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  position?: 'left' | 'right'
  type?: 'happy' | 'think' | 'smile' | 'sad' | 'lovely' | 'angry' | 'calm' | 'circle' | 'gao' | 'hooray' | 'lookat' | 'peek' | 'salute' | 'smug' | 'stand' | 'surprised' | 'wink' | 'one' | 'two' | 'three' | 'four'
}>()
</script>

<style scoped>
.puru-bubble {
  display: flex;
  align-items: flex-end;
  max-width: 960px;
  margin: 10px auto;
  position: relative;
}

.puru-bubble.left {
  flex-direction: row;
}

.puru-bubble.right {
  flex-direction: row-reverse;
}

.puru-bubble::after {
  content: '';
  width: 84px;
  height: 84px;
  border-radius: 10px;
  margin: 0 20px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_happy.png?raw=true');
}

.puru-bubble p {
  position: relative;
  background-color: #FFE27B;
  border-radius: 20px;
  padding: 20px;
  max-width: 960px;
  margin: 0 0 30px 0;
  font-size: 1em;
  line-height: 1.6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.puru-bubble.left p {
  right: 20px;
}

.puru-bubble.right p {
  left: 20px;
}

.puru-bubble.left p::after {
  content: '';
  position: absolute;
  right: -15px;
  bottom: 20px;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-left: 20px solid #FFE27B;
  border-bottom: 12px solid transparent;
}

.puru-bubble.right p::before {
  content: '';
  position: absolute;
  left: -15px;
  bottom: 20px;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-right: 20px solid #FFE27B;
  border-bottom: 12px solid transparent;
}

/* 画像の種類 */
.puru-bubble.sad::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_sad.png?raw=true');
}

.puru-bubble.smile::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_smile.png?raw=true');
}

.puru-bubble.happy::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_happy.png?raw=true');
}

.puru-bubble.think::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_think.png?raw=true');
}

.puru-bubble.lovely::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_lovely.png?raw=true');
}

.puru-bubble.angry::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_angry.png?raw=true');
}

.puru-bubble.calm::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_calm.png?raw=true');
}

.puru-bubble.circle::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_circle.png?raw=true');
}

.puru-bubble.gao::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_gao-.png?raw=true');
}

.puru-bubble.hooray::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_hooray.png?raw=true');
}

.puru-bubble.lookat::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_lookat.png?raw=true');
}

.puru-bubble.peek::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_peek.png?raw=true');
}

.puru-bubble.salute::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_salute.png?raw=true');
}

.puru-bubble.smug::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_smug face.png?raw=true');
}

.puru-bubble.stand::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_stand.png?raw=true');
}

.puru-bubble.surprised::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_surprised.png?raw=true');
}

.puru-bubble.wink::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_wink.png?raw=true');
}

.puru-bubble.one::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_1.png?raw=true');
}

.puru-bubble.two::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_2.png?raw=true');
}

.puru-bubble.three::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_3.png?raw=true');
}

.puru-bubble.four::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/puru_4.png?raw=true');
}
</style> 