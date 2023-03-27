<template>
  <div id="ExperienceContainer">
    <v-timeline class="Timeline" :side="getSide">
      <v-timeline-item
        v-for="(info, i) in experiences"
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
import { experiences } from '@/data/experience'
import { computed } from 'vue'

const props = defineProps<{ isSmallScreen: boolean }>()

const getSide = computed(() => {
  return props.isSmallScreen ? 'end' : undefined
})

const getStyle = (color: string) => {
  return `color: ${color}`
}
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
