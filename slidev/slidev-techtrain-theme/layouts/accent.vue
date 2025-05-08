<template>
  <div class="slidev-layout accent">
    <div class="slidev-layout-content">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.accent {
  background-image: url('https://raw.githubusercontent.com/sugitlab/slide-deck/refs/heads/main/slides/theme/light_bg_element.png');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  height: 100%;
  width: 100%;
}

.slidev-layout-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slidev-layout.accent h1 {
  font-size: 2em;
  border: none;
  text-align: center;
  color: var(--color-text-body-light);
  width: 100%;
  margin-bottom: 1em;
}
</style> 