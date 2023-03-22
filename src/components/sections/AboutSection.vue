<template>
  <div id="AboutContainer">
    <div class="PersonalInfoContent">
      <h1 class="Title">About Me</h1>
      <v-divider />
      <div class="BackgroundAndSkills">
        <div>
          <p v-for="(content, index) in intro" class="Background" v-html="content" :key="index"></p>
        </div>
        <div>
          <v-chip-group>
            <v-chip
              v-for="(item, index) in techStacks"
              class="ma-2 Chip"
              :key="index"
              color="success"
              label
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const intro = [
  'Hi there, Welcome to my space, I am Lewis, a <b>Full Stack Developer</b> who loves solving problem and crafting tools.',
  'Currently I am building a <b>real-time transit application</b> that provides estimated arrival times (ETA) for <b>TTC buses and streetcars</b>, Make sure to check it out!',
  'Here are some of the Tech Stacks I have been using lately.'
]

const techStacks = [
  'Vue.js',
  'React.js',
  'Node.js',
  'Typescript',
  'Python',
  'RabbitMq',
  'WebSocket',
  'MongoDB',
  'Mysql',
  'Docker',
  'Kubernetes',
  'Jest',
  'Pytest',
  'Google Analytics',
  'Vuetify',
  'Vuex',
  'Event-Sourcing',
  'CQRS'
]
</script>
<style scoped>
#AboutContainer {
  min-height: 100vh;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
}

p {
  margin-bottom: 12px;
}

.BackgroundAndSkills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 16px;
}

.PersonalInfoContent {
  width: 60%;
}

.Title {
  width: 100%;
  text-align: end;
}

h1 {
  font-size: 48px;
  color: #562b08;
}

.Chip {
  pointer-events: none;
}

@media (min-width: 1281px) {
  #AboutContainer {
    min-height: 80vh;
  }
}

@media (max-width: 1280px) {
  #AboutContainer {
    min-height: 110vh;
  }
}

@media (max-width: 980px) {
  .BackgroundAndSkills {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  .PersonalInfoContent {
    width: 80%;
  }
}
</style>
