<template>
  <div class="FooterContainer">
    <div class="FooterContent">
      <BaseButton
        color="transparent"
        icon="mdi-github"
        variant="flat"
        @click="handleOpenNewTabClick(github)"
      ></BaseButton>
      <BaseButton
        color="transparent"
        icon="mdi-linkedin"
        variant="flat"
        @click="handleOpenNewTabClick(linkedIn)"
      ></BaseButton>
      <BaseButton
        color="transparent"
        icon="mdi-file-pdf-box"
        variant="flat"
        @click="handleOpenNewTabClick(resume)"
      ></BaseButton>
      <BaseButton
        color="transparent"
        icon="mdi-gmail"
        variant="flat"
        @click="handleCopyClick(gmail)"
      ></BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import resume from '@/assets/resume.pdf'
import { handleOpenNewTabClick } from '@/utils/url'
import { useStore } from 'vuex'

import { github, gmail, linkedIn } from '../../constant/socialMediaLinks'
import BaseButton from '../base/BaseButton.vue'

const store = useStore()

const handleCopyClick = (mail: string) => {
  store.dispatch('notify', { message: 'Email Copied!' })
  navigator.clipboard.writeText(mail)
}
</script>

<style scoped>
.FooterContainer {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 64px;
  left: 32px;
}

@media (max-width: 980px) {
  .FooterContainer {
    flex-direction: row;
    width: 100%;
    position: unset;
    justify-content: center;
  }

  .FooterContent {
    display: flex;
  }
}
</style>
