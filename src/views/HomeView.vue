<template>
  <main>
    <!-- header -->
    <v-parallax class="Parallax" :src="bg3" min-height="400vh">
      <HeaderBar :isSmallScreen="isSmallScreen" :shdShowHeader="shdShowHeader"></HeaderBar>

      <!-- start of section -->
      <LandingSection class="LandingSection" />
      <AboutSection class="AboutSection" />
      <ExperienceSection class="ExperienceSection" :isSmallScreen="isSmallScreen" />
      <PortfolioSection class="PortfolioSection" :isMediumScreen="isMediumScreen" />
      <!-- end of sections -->

      <!-- snackbar for notification -->
      <BaseSnackbar />

      <!-- footer -->
      <BaseTransit name="horizontalSlide">
        <FooterBar v-if="isLoaded" />
      </BaseTransit>

      <!-- copyRight -->
      <div class="Copyright">
        {{ getCopyRight() }}
      </div>
    </v-parallax>
  </main>
</template>

<script lang="ts" setup>
import bg3 from '@/assets/bg3.jpeg'
import BaseSnackbar from '@/components/base/BaseSnackbar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import LandingSection from '@/components/sections/LandingSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ScrollReveal from 'scrollreveal'
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
  const scrollInstance = ScrollReveal({ distance: '400px' })

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  shdShowHeader.value = true
  isSmallScreen.value = window.innerWidth <= 980
  isMediumScreen.value = window.innerWidth <= 1280
  isLoaded.value = true

  scrollInstance.reveal('.LandingSection', { delay: 100 })
  scrollInstance.reveal('.AboutSection', { delay: 200, origin: 'left' })
  scrollInstance.reveal('.ExperienceSection', { delay: 200, origin: 'right' })
  scrollInstance.reveal('.PortfolioSection', { delay: 200, origin: 'left' })
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
