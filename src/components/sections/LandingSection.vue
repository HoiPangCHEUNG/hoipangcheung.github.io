<template>
  <div id="LandingContainer">
    <v-card class="ProfileCard mx-auto elevation-0" color="transparent" rounded="0">
      <div class="Avatar">
        <v-avatar class="PropicContainer" color="grey" rounded="50" size="300" variant="outlined">
          <v-img class="Propic" :src="propic" cover />
        </v-avatar>
        <p v-html="personalInfo.avatar.name" />
        <p class="Profession" v-html="personalInfo.avatar.profession" />
      </div>

      <div class="Background">
        <h2 class="Title" v-html="personalInfo.intro.title" />
        <p
          v-for="(content, index) in personalInfo.intro.contents"
          class="Contents"
          v-html="content"
          :key="index"
        />
        <div>
          <v-chip-group class="ChipGroup">
            <v-chip
              v-for="(item, index) in personalInfo.techStacks"
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
import { personalInfo } from '@/data/personal'

const getClass = (index: number) => {
  return [index % 2 === 0 ? 'DarkChip' : 'LightChip']
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

.PropicContainer {
  border-radius: 50%;
  transform: scale(1);
}

.Propic {
  width: 100%;
  height: 100%;
  transition: all 1s ease;
}

.PropicContainer:hover {
  transform: scale(1);
}

.PropicContainer:hover .Propic {
  transform: scale(1.3);
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
