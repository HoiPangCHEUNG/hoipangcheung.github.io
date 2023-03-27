<template>
  <div class="HeaderContentContainer">
    <BaseButton
      color="transparent"
      name="Home"
      variant="flat"
      @clicked="handleButtonClick('LandingContainer')"
    />
    <BaseButton
      color="transparent"
      name="Experience"
      variant="flat"
      @clicked="handleButtonClick('ExperienceSectionBuffer')"
    />
    <BaseButton
      color="transparent"
      name="Portfolio"
      variant="flat"
      @clicked="handleButtonClick('PortfolioSectionBuffer')"
    />
  </div>
</template>

<script lang="ts" setup>
import { BaseButtonEmits } from '@/models/props/baseButtonProps'
import { handleGotoClick } from '@/utils/url'

import BaseButton from '../base/BaseButton.vue'

const emits = defineEmits<BaseButtonEmits>()

const handleButtonClick = (goto: string) => {
  handleGotoClick(goto)
  emits('clicked', '')
}
</script>

<style scoped>
.HeaderContentContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 32px 16px 32px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

@media (max-width: 1280px) {
  .HeaderContentContainer {
    flex-direction: column;
  }
}
</style>
