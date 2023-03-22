<template>
  <div class="BaseProjectInfo" :class="{ BaseProjectInfoReversed: props.shdReverse }">
    <div>
      <v-img :src="props.mediaPath" aspect-ratio="1.78" width=""></v-img>
    </div>
    <div class="BaseProjectInfoDetails">
      <h2>{{ props.title }}</h2>
      <p>
        {{ props.description }}
      </p>
      <div class="BaseButtonGroup">
        <BaseButton
          v-if="props.site"
          class="PortfolioButton"
          name="Try it"
          color="#562B08"
          size="large"
          @click="handleOpenNewTabClick(props.site)"
        ></BaseButton>
        <BaseButton
          class="PortfolioButton"
          name="Source Code"
          color="#562B08"
          size="large"
          @click="handleOpenNewTabClick(props.githubUrl)"
        ></BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { handleOpenNewTabClick } from '@/utils/url'

import { BaseProjectInfoProps } from '../../models/props/BaseProjectInfoProps'
import BaseButton from './BaseButton.vue'

const props = defineProps<BaseProjectInfoProps>()
console.log(props)
</script>

<style scoped>
.BaseProjectInfo {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.BaseButtonGroup {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 12px;
}

.BaseProjectInfoReversed {
  direction: rtl;
  grid-auto-flow: column;
}

.BaseProjectInfoDetails {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

p {
  margin-top: 16px;
  margin-bottom: 16px;
  color: #424242;
  text-align: center;
}
.PortfolioButton {
  margin-top: 16px;
  color: #eeeeee;
}

@media (max-width: 1280px) {
  .BaseProjectInfo {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .BaseButtonGroup {
    flex-direction: column;
    align-items: center;
  }
}
</style>
