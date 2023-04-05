<template>
  <div class="FooterContainer">
    <div class="FooterContent">
      <BaseButton
        color="transparent"
        icon="mdi-github"
        variant="flat"
        @click="handleOpenNewTabClick(github)"
      />
      <BaseButton
        color="transparent"
        icon="mdi-linkedin"
        variant="flat"
        @click="handleOpenNewTabClick(linkedIn)"
      />
      <BaseButton
        color="transparent"
        icon="mdi-file-pdf-box"
        variant="flat"
        @click="handleOpenNewTabClick(resume)"
      />
      <BaseButton
        color="transparent"
        icon="mdi-gmail"
        variant="flat"
        @click="handleCopyClick(gmail)"
      />
      <BaseButton
        color="transparent"
        icon="mdi-qrcode-scan"
        variant="flat"
        @click="toggleDialogStatus()"
      />
      <v-dialog v-model="shdShowDialog" class="QrCodeDialog" width="auto">
        <v-card class="QrCodeCard">
          <v-img :src="qrCode" width="400px" />
          <BaseButton
            class="CloseQrCodeDialogButton"
            color="transparent"
            icon="mdi-close-circle"
            variant="flat"
            @click="toggleDialogStatus()"
          />
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import qrCode from '@/assets/qrCode.jpeg'
import resume from '@/assets/resume.pdf'
import { handleOpenNewTabClick } from '@/utils/url'
import { ref } from 'vue'
import { useStore } from 'vuex'

import { github, gmail, linkedIn } from '../../constant/link'
import BaseButton from '../base/BaseButton.vue'

const store = useStore()

const shdShowDialog = ref(false)

const toggleDialogStatus = () => {
  shdShowDialog.value = !shdShowDialog.value
  console.log(shdShowDialog.value)
}

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

.QrCodeCard {
  padding: 24px 0px;
}

.QrCodeDialog .v-card {
  overflow: visible;
}

.CloseQrCodeDialogButton {
  position: absolute;
  top: -20px;
  right: -20px;
}

@media (max-width: 1280px) {
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
