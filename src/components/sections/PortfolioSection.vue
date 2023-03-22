<template>
  <div id="PortfolioContainer">
    <div class="PortfolioContent">
      <h1 class="Title">Personal Portfolio</h1>
      <v-divider />
      <div>
        <BaseProjectInfo
          v-for="(project, index) in projects"
          v-bind="project"
          :key="index"
          :shdReverse="shdReverse(index)"
        ></BaseProjectInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import etaApp from '@/assets/etaApp.jpeg'
import nodeJsExpressJs from '@/assets/nodeJsExpressJs.jpeg'
import personalProj from '@/assets/personalProj.jpeg'
import translator from '@/assets/translator.jpeg'

import BaseProjectInfo from '../base/BaseProjectInfo.vue'

const props = defineProps<{ isMediumScreen: boolean }>()

const shdReverse = (index: number) => {
  return (index + 1) % 2 === 0 && !props.isMediumScreen
}

const projects = [
  {
    title: 'TTC-Next',
    mediaPath: etaApp,
    description:
      'TTC Next is a real-time transit application that provides estimated arrival times (eta) for TTC buses and streetcars',
    site: 'https://hoipangcheung.github.io/TTC-Next/',
    githubUrl: 'https://github.com/HoiPangCHEUNG/TTC-Next'
  },
  {
    title: 'Personal Project ',
    mediaPath: personalProj,
    description: 'A single page web application that let you know more about me',
    site: 'https://hoipangcheung.github.io/',
    githubUrl: 'https://github.com/HoiPangCHEUNG/hoipangcheung.github.io'
  },
  {
    title: 'ChatGpt JsonTranslator',
    mediaPath: translator,
    description:
      'A simple Python script that translate the content of your jsonFile into different language',
    githubUrl: 'https://github.com/HoiPangCHEUNG/chatGptJsonTranslator'
  },
  {
    title: 'NodeJs Starter Template ',
    mediaPath: nodeJsExpressJs,
    description:
      'A sample project written in Typescript demonstrates how you could use inversifyJS in NodeJS for better management of dependency injection.',
    githubUrl: 'https://github.com/HoiPangCHEUNG/minimal-backend-demo'
  }
]
</script>

<style scoped>
#PortfolioContainer {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.PortfolioContent {
  width: 80%;
}

.Title {
  width: 100%;
  text-align: end;
  color: #562b08;
}
h1 {
  font-size: 48px;
}
</style>
