<template>
  <div id="LandingContainer">
    <div class="LandingContent">
      <h1>HI! THIS IS LEWIS</h1>
      <div class="SubTitle">
        <p v-for="(content, index) in contents" v-html="content" :key="index"></p>
      </div>
      <BaseButton
        class="PortfolioButton"
        color="#562B08"
        name="Portfolio"
        size="x-large"
        @click="handleGotoClick('PortfolioContainer')"
      ></BaseButton>
      <v-icon class="arrow-down-icon"> mdi-arrow-down </v-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { handleGotoClick } from '@/utils/url'

import BaseButton from '../base/BaseButton.vue'

const contents = [
  ' A Full Stack Developer with expereince in building and maintaining complex web applications.',
  'Possessing expertise in <b><i>Vue.js</i></b> and <b><i>Node.js</i></b>'
]
</script>

<style scoped>
#LandingContainer {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.SubTitle {
  text-align: center;
}

.PortfolioButton {
  margin-top: 16px;
  color: #eeeeee;
}

.LandingContent {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  letter-spacing: 3px;
  font-weight: 900;
}

h3 {
  margin-top: 16px;
  text-align: end;
  font-style: italic;
  font-weight: 300;
}

@media (max-width: 400px) {
  h1 {
    letter-spacing: 1px;
  }
}

@media (max-width: 1280px) {
  #LandingContainer {
    min-height: 110vh;
  }
}

.arrow-down-icon {
  animation: arrowDown 2s infinite;
  top: 64px;
}

@keyframes arrowDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
