<template>
  <div class="HeaderContainer">
    <BaseTransit name="verticalSlide" v-if="!props.isSmallScreen">
      <HeaderContent v-show="shdShowHeader" />
    </BaseTransit>

    <v-layout v-else>
      <v-navigation-drawer v-model="shdShowMenu" temporary theme="dark">
        <HeaderContent @click="handleGotoClick" />
      </v-navigation-drawer>
      <BaseTransit name="verticalSlide">
        <BaseButton
          v-if="shdShowHeader"
          class="HeaderMenuButton"
          color="transparent"
          icon="mdi-menu"
          variant="flat"
          @click="handleMenuClick"
        />
      </BaseTransit>
    </v-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import BaseButton from '../base/BaseButton.vue'
import BaseTransit from '../base/BaseTransit.vue'
import HeaderContent from './HeaderContent.vue'

const shdShowMenu = ref(false)

const handleMenuClick = () => {
  shdShowMenu.value = true
}

const handleGotoClick = () => {
  shdShowMenu.value = false
}

const props = defineProps<{ isSmallScreen: boolean; shdShowHeader: boolean }>()
</script>

<style scoped>
.HeaderMenuButton {
  padding: 16px 0px 0px 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
