<template>
  <div class="riku-bubble" :class="[position, type]">
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
.riku-bubble {
  display: flex;
  align-items: flex-end;
  max-width: 960px;
  margin: 10px auto;
  position: relative;
}

.riku-bubble.left {
  flex-direction: row;
}

.riku-bubble.right {
  flex-direction: row-reverse;
}

.riku-bubble::after {
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
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_happy.png?raw=true');
}

.riku-bubble p {
  position: relative;
  background-color: #85CBE9;
  border-radius: 20px;
  padding: 20px;
  max-width: 960px;
  margin: 0 0 10px 0;
  font-size: 1em;
  line-height: 1.6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.riku-bubble.left p {
  right: 20px;
}

.riku-bubble.right p {
  left: 20px;
}

.riku-bubble.left p::after {
  content: '';
  position: absolute;
  right: -15px;
  bottom: 20px;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-left: 20px solid #85CBE9;
  border-bottom: 12px solid transparent;
}

.riku-bubble.right p::before {
  content: '';
  position: absolute;
  left: -15px;
  bottom: 10px;
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-right: 20px solid #85CBE9;
  border-bottom: 12px solid transparent;
}

/* 画像の種類 */
.riku-bubble.sad::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_sad.png?raw=true');
}

.riku-bubble.smile::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_smile.png?raw=true');
}

.riku-bubble.happy::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_happy.png?raw=true');
}

.riku-bubble.think::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_think.png?raw=true');
}

.riku-bubble.lovely::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_lovely.png?raw=true');
}

.riku-bubble.angry::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_angry.png?raw=true');
}

.riku-bubble.calm::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_calm.png?raw=true');
}

.riku-bubble.circle::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_circle.png?raw=true');
}

.riku-bubble.gao::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_gao-.png?raw=true');
}

.riku-bubble.hooray::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_hooray.png?raw=true');
}

.riku-bubble.lookat::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_lookat.png?raw=true');
}

.riku-bubble.peek::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_peek.png?raw=true');
}

.riku-bubble.salute::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_salute.png?raw=true');
}

.riku-bubble.smug::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_smug face.png?raw=true');
}

.riku-bubble.stand::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_stand.png?raw=true');
}

.riku-bubble.surprised::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_surprised.png?raw=true');
}

.riku-bubble.wink::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_wink.png?raw=true');
}

.riku-bubble.one::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_1.png?raw=true');
}

.riku-bubble.two::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_2.png?raw=true');
}

.riku-bubble.three::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_3.png?raw=true');
}

.riku-bubble.four::after {
  background-image: url('https://github.com/sugitlab/slide-deck/blob/main/slides/theme/puru-riku/riku_4.png?raw=true');
}
</style> 