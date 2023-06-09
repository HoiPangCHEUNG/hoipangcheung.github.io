<template>
  <main>
    <!-- header -->
    <HeaderBar :is-small-screen="isSmallScreen" :shd-show-header="shdShowHeader"></HeaderBar>

    <!-- start of section -->
    <LandingSection class="LandingSection" />
    <BaseSectionBuffer
      id="ExperienceSectionBuffer"
      :title="sectionBuffers.experience"
    ></BaseSectionBuffer>
    <ExperienceSection class="ExperienceSection" :is-small-screen="isSmallScreen" />
    <BaseSectionBuffer
      id="PortfolioSectionBuffer"
      :title="sectionBuffers.portfolio"
    ></BaseSectionBuffer>
    <PortfolioSection class="PortfolioSection" :is-medium-screen="isMediumScreen" />
    <!-- end of sections -->

    <!-- snackbar for notification -->
    <BaseSnackbar />

    <!-- footer -->
    <BaseTransit name="horizontalSlide">
      <FooterBar v-if="isLoaded" />
    </BaseTransit>

    <!-- copyRight -->
    <div class="Copyright" v-text="getCopyRight()" />
  </main>
</template>

<script lang="ts" setup>
import BaseSectionBuffer from '@/components/base/BaseSectionBuffer.vue'
import BaseSnackbar from '@/components/base/BaseSnackbar.vue'
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

const sectionBuffers = {
  experience: 'The Journey Begins!~ 🎉',
  portfolio: 'Some of my personal works!~ 👀'
}

onMounted(() => {
  const scrollInstance = ScrollReveal({ distance: '60px', origin: 'top' })

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  shdShowHeader.value = true
  isSmallScreen.value = window.innerWidth <= 1280
  isMediumScreen.value = window.innerWidth <= 1280
  isLoaded.value = true

  scrollInstance.reveal('.LandingSection', { delay: 100 })
  scrollInstance.reveal('#ExperienceSectionBuffer', { delay: 300 })
  scrollInstance.reveal('.ExperienceSection', { delay: 300 })
  scrollInstance.reveal('#PortfolioSectionBuffer', { delay: 300 })
  scrollInstance.reveal('.PortfolioSection', { delay: 300 })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 1280 ? true : false
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

main {
  background-image: pink;
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

@media (max-width: 1280px) {
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
