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
      <BaseButton
        class="PortfolioButton"
        :name="props.buttonName"
        color="#562B08"
        size="large"
        @click="handleOpenNewTabClick(props.site)"
      ></BaseButton>
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
</style>
