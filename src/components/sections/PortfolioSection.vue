<template>
  <div id="PortfolioContainer">
    <div class="PortfolioContent">
      <div>
        <BaseProjectInfo
          v-for="(project, index) in projects"
          v-bind="project"
          :key="index"
          :shdReverse="shdReverse(index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects } from '@/data/portfolio'

import BaseProjectInfo from '../base/BaseProjectInfo.vue'

const props = defineProps<{ isMediumScreen: boolean }>()

const shdReverse = (index: number) => {
  return (index + 1) % 2 === 0 && !props.isMediumScreen
}
</script>

<style scoped>
#PortfolioContainer {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.PortfolioContent {
  width: 80%;
}

.Title {
  width: 100%;
  text-align: end;
  color: #562b08;
}
h1 {
  font-size: 48px;
}
</style>
