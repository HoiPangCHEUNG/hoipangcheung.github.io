<template>
  <main>
    <!-- header -->
    <v-parallax class="Parallax" :src="bg" min-height="400vh">
      <HeaderBar :isSmallScreen="isSmallScreen" :shdShowHeader="shdShowHeader"></HeaderBar>

      <!-- start of sections -->
      <BaseTransit>
        <LandingSection v-if="isLoaded" ref="home" />
      </BaseTransit>
      <AboutSection ref="about" />
      <ExperienceSection ref="experience" :isSmallScreen="isSmallScreen" />
      <PortfolioSection ref="portfolio" :isMediumScreen="isMediumScreen" />
      <!-- end of sections -->

      <!-- snackbar for notification -->
      <BaseSnackbar />

      <!-- footer -->
      <BaseTransit>
        <FooterBar v-if="isLoaded" />
      </BaseTransit>
      <div class="Copyright">
        {{ getCopyRight() }}
      </div>
    </v-parallax>
  </main>
</template>

<script lang="ts" setup>
import bg from '@/assets/bg.jpeg'
import BaseSnackbar from '@/components/base/BaseSnackbar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import LandingSection from '@/components/sections/LandingSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import { onMounted, onUnmounted, ref } from 'vue'

import BaseTransit from '../components/base/BaseTransit.vue'
import FooterBar from '../components/footer/FooterBar.vue'
import HeaderBar from '../components/header/HeaderBar.vue'

const isLoaded = ref(false)
const lastScrollPosition = ref(window.scrollY)
const shdShowHeader = ref(false)
const isSmallScreen = ref(false)
const isMediumScreen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  shdShowHeader.value = true
  isSmallScreen.value = window.innerWidth <= 980
  isMediumScreen.value = window.innerWidth <= 1280
  isLoaded.value = true
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 980 ? true : false
  isMediumScreen.value = window.innerWidth <= 1280 ? true : false
}

const handleScroll = () => {
  shdShowHeader.value = window.scrollY > lastScrollPosition.value ? false : true
  lastScrollPosition.value = window.scrollY
}

const getCopyRight = () => {
  const year = new Date().getFullYear()
  return `@${year} Lewis`
}
</script>

<style>
.v-navigation-drawer__scrim {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

h3 {
  font-size: 16px;
}
h1 {
  font-size: 3.5vw;
}

.Copyright {
  text-align: center;
  margin-bottom: 12px;
  color: #666666;
  margin-top: 64px;
}

@media (max-width: 980px) {
  h3 {
    font-size: 12px;
  }
  h1 {
    font-size: 32px;
  }

  .Copyright {
    margin-top: 0px;
  }
}
</style>
