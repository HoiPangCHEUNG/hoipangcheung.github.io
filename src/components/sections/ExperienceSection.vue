<template>
  <div id="ExperienceContainer">
    <v-timeline class="Timeline" :side="getSide">
      <v-timeline-item
        v-for="(info, i) in infos"
        :class="i"
        :dot-color="info.color"
        :key="i"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold`"
            v-text="info.year"
            :style="getStyle(info.color)"
          />
        </template>
        <div class="Contents">
          <h2
            :class="`headline font-weight-light mb-4`"
            v-html="info.title"
            :style="getStyle(info.color)"
          />
          <p v-html="info.event" />
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts" setup>
import { cuhk, hket, initium, prisec, scmp, tabNext } from '@/constant/link'
import { computed } from 'vue'

const props = defineProps<{ isSmallScreen: boolean }>()

const getSide = computed(() => {
  return props.isSmallScreen ? 'end' : undefined
})

const getStyle = (color: string) => {
  return `color: ${color}`
}

const getLink = (url: string, title: string) => {
  return `<a href="${url}" target="_blank">@${title}</a>`
}

const infos = [
  {
    year: '2017 Mar',
    title: `QA engineer ${getLink(initium, 'Initium')}`,
    event: `The first job I've ever had!<br/>As a QA engineer, my responsibilities included developing automated test suites using Python.`,
    color: '#182747'
  },
  {
    year: '2017 June',
    title: `Support engineer ${getLink(hket, 'Hong Kong Economic Times')}`,
    event:
      'At another digital media company, my role focused on providing user support and managing equipment.',
    color: '#562b08'
  },
  {
    year: '2018 Mar',
    title: `Junior Frontend Developer ${getLink(tabNext, 'TabNext Asia')}`,
    event: 'Learning and crafting reusable & responsive web components.',
    color: '#495579'
  },
  {
    year: '2019 Jan',
    title: `Software Developer ${getLink(prisec, 'Prisec')}`,
    event: 'Developed an authenticator application on top of the OIDC protocol.',
    color: '#182747'
  },
  {
    year: '2019 Nov',
    title: `Graduation ${getLink(cuhk, 'CUHK')}`,
    event: 'Officially graduated = ] 🚀  <br/>Thanks Google & my fellow groupmates',
    color: '#562b08'
  },
  {
    year: '2020 Nov',
    title: `Full Stack Developer ${getLink(scmp, 'South China Morning Post')}`,
    event:
      'Designed and built a customized collaborative online editing system similar to Google Docs.',
    color: '#495579'
  },
  {
    year: 'Now',
    title: `To be Continued...`,
    event: '',
    color: '#9E7676'
  }
]
</script>

<style scoped>
#ExperienceContainer {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
}

.Timeline {
  width: 95%;
}

.Contents {
  max-width: 400px;
}

.Contents:hover {
  transform: translateY(-4px);
  transition: all 0.2s ease-in-out;
}

.Contents:not(:hover) {
  transform: translateY(4px);
  transition: all 0.2s ease-in-out;
}

h2 {
  margin-top: 32px;
}

p {
  margin-bottom: 32px;
}

@media (max-width: 1280px) {
  #ExperienceContainer {
    margin-bottom: 64px;
  }

  .Contents {
    max-width: 600px;
  }
}

@media (max-width: 680px) {
  h2 {
    font-size: 24px;
  }
}
</style>
