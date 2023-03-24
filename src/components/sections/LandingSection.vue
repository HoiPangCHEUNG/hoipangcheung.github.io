<template>
  <div id="LandingContainer">
    <v-card class="ProfileCard mx-auto elevation-0" color="transparent" rounded="0">
      <div class="Avatar">
        <v-avatar color="grey" rounded="50" size="300" variant="outlined">
          <v-img class="Propic" :src="propic" cover />
        </v-avatar>
        <p v-html="avatar.name" />
        <p class="Profession" v-html="avatar.profession" />
      </div>

      <div class="Background">
        <h2 class="Title" v-html="profile.title" />
        <p
          v-for="(content, index) in profile.contents"
          class="Contents"
          v-html="content"
          :key="index"
        />
        <div>
          <v-chip-group class="ChipGroup">
            <v-chip
              v-for="(item, index) in techStacks"
              class="Chip"
              :class="getClass(index)"
              :key="index"
              label
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import propic from '@/assets/propic.jpeg'

const getClass = (index: number) => {
  return [index % 2 === 0 ? 'DarkChip' : 'LightChip']
}

const avatar = { name: 'Lewis', profession: 'Full Stack Developer' }

const techStacks = [
  'MongoDB',
  'Express',
  'Vue',
  'React',
  'Node',
  'Typescript',
  'Vuetify',
  'Vuex',
  'Redux',
  'Python',
  'RabbitMq',
  'WebSocket',
  'Docker',
  'Kubernetes',
  'Jest',
  'Pytest',
  'Google Analytics',
  'Event-Sourcing',
  'CQRS'
]

const profile = {
  title: 'Hi There I am Lewis!~ 👻',
  contents: [
    `I'm a <b><i>Full Stack Developer</b></i> with a main focus on building and maintaining complex web applications. I'm passionate about delivering the best possible user experience and am particularly skilled in working with <b><i>Vue.js</b></i>, <b><i>React.js</b></i> & <b><i>Node.js</b></i>.`,
    `Currently I'm seeking new job opportunities that will allow me to make a meaningful contribution, if you have a position that aligns with my skills and experience, please don't hesitate to get in touch with me.`,
    'Below are some tools I have been using lately~'
  ]
}
</script>

<style scoped>
#LandingContainer {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.ProfileCard {
  width: 60%;
  display: flex;
  flex-direction: row;
  gap: 4rem;
}

.Chip {
  font-weight: 300;
  margin: 8px 8px 8px 0px;
  cursor: default;
}

.Chip:hover {
  transform: translateY(-4px);
  transition: all 0.2s ease-in-out;
}

.Chip:not(:hover) {
  transform: translateY(4px);
  transition: all 0.2s ease-in-out;
}

.Propic:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.3);
}

.Propic:not(:hover) {
  transition: all 0.2s ease-in-out;
  transform: scale(1);
}

.DarkChip {
  color: #562b08;
}

.LightChip {
  color: #647e68;
}

.Background {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
}
.Contents {
  color: #333333;
}

.Title {
  font-size: 32px;
  font-family: Arial;
  font-weight: 600;
}
.Avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 64px;
}

.Profession {
  opacity: 0.6;
}

@media (max-width: 1500px) {
  .ProfileCard {
    width: 80%;
  }
}

@media (max-width: 1280px) {
  #LandingContainer {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
  }
  .ProfileCard {
    flex-direction: column;
    gap: 2rem;
  }

  .Background {
    align-items: center;
    text-align: center;
  }

  .ChipGroup {
    justify-content: center;
  }
}

@media (max-width: 980px) {
  .ProfileCard {
    width: 90%;
  }
  .Avatar {
    margin-top: 64px;
  }
}
</style>
