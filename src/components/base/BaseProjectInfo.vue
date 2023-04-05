<template>
  <div class="BaseProjectInfo" :class="{ BaseProjectInfoReversed: props.shdReverse }">
    <v-card class="elevation-10 Card rounded-lg">
      <v-img aspect-ratio="1.78" :src="props.mediaPath"></v-img>
    </v-card>
    <div class="BaseProjectInfoDetails">
      <h2 v-text="props.title" />
      <p v-text="props.description" />
      <div class="BaseButtonGroup">
        <BaseButton
          v-if="props.site"
          class="PortfolioButton"
          color="#562B08"
          name="Try it"
          size="large"
          @click="handleOpenNewTabClick(props.site)"
        />
        <BaseButton
          class="PortfolioButton"
          color="#562B08"
          name="Source Code"
          size="large"
          @click="handleOpenNewTabClick(props.githubUrl)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { handleOpenNewTabClick } from '@/utils/url'

import { BaseProjectInfoProps } from '../../models/props/baseProjectInfoProps'
import BaseButton from './BaseButton.vue'

const props = defineProps<BaseProjectInfoProps>()
</script>

<style scoped>
.BaseProjectInfo {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 2rem;
  margin-bottom: 64px;
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

.Card:hover {
  transform: translateY(-4px);
  transition: all 0.2s ease-in-out;
}

.Card:not(:hover) {
  transform: translateY(4px);
  transition: all 0.2s ease-in-out;
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

h2 {
  text-align: center;
}
.PortfolioButton {
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
