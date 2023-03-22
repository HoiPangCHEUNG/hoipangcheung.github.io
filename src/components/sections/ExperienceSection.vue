<template>
  <div id="ExperienceContainer">
    <v-card class="elevation-0 ExperienceContent" color="transparent">
      <h1>Experience</h1>
      <v-divider />
      <div :class="stylesAttrs.classAttrs">
        <v-tabs v-model="tab" :direction="stylesAttrs.direction" color="#562B08" show-arrows>
          <v-tab
            v-for="jobDetail in jobDetails"
            :key="jobDetail.shortName"
            :value="jobDetail.shortName"
          >
            {{ jobDetail.shortName }}
          </v-tab>
        </v-tabs>
        <v-window class="elevation-0" v-model="tab">
          <v-window-item
            v-for="jobDetail in jobDetails"
            :key="jobDetail.shortName"
            :value="jobDetail.shortName"
          >
            <v-card color="transparent" flat>
              <v-card-text>
                <div class="roleDetails">
                  <h2>{{ jobDetail.jobTitle }}</h2>
                  <h3>|</h3>
                  <h2 class="companyTitle" @click="handleOpenNewTabClick(jobDetail.url)">
                    {{ jobDetail.fullName }}
                  </h2>
                </div>
                <p class="jobDuration">{{ jobDetail.duration }}</p>

                <p v-for="(duty, index) in jobDetail.duties" v-html="duty" :key="index"></p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { handleOpenNewTabClick } from '@/utils/url'
import { computed, ref } from 'vue'

const props = defineProps<{ isSmallScreen: boolean }>()

const stylesAttrs = computed(() => {
  const direction: 'horizontal' | 'vertical' | undefined = props.isSmallScreen
    ? 'horizontal'
    : 'vertical'

  const classAttrs = props.isSmallScreen ? '' : 'd-flex flex-row'
  return { classAttrs, direction }
})

const jobDetails = [
  {
    shortName: 'SCMP',
    value: 1,
    fullName: 'South China Morning Post',
    duration: '2020 Nov - 2022 Sep',
    jobTitle: 'Full Stack Developer',
    url: 'https://www.scmp.com/',
    duties: [
      'Built a <b>Collaborative online editing tool</b> similar to Google Docs, allowing editors to draft articles concurrently in real-time.',
      'Designed the backend system using the <b>Event sourcing and CQRS architecture</b>, which allows for storing and replaying of events to reconstruct application state and enable better scalability and fault tolerance.',
      'Established and managed <b>RabbitMQ</b> to publish/subscribe updates for effective communication between asynchronous systems.',
      'Revamped the workflow of <b>WebSocket</b> to tackle race conditions.',
      'Teamed on user-centric design strategy in translation of <b>UI/UX</b> and business requirements into coded solutions.'
    ]
  },
  {
    shortName: 'Prisec',
    value: 2,
    fullName: 'Prisec Limited',
    duration: '2019 Jan - 2020 Oct',
    jobTitle: 'Software Developer',
    url: 'https://prisec.co/',
    duties: [
      'Developed an authenticator on top of <b>OIDC protocol</b> for hassle-free registration and login, while maintaining user anonymity.',
      'Implemented a highly efficient Python WebCrawler capable of automatically fetching and filtering <b>millions of rows of targeted data daily</b>, allowing for easy analysis and processing.',
      'Desgined and built a peer-2-peer trading application with <b>gRpc and Flutter</b> from scratch'
    ]
  },
  {
    shortName: 'TabNext',
    value: 3,
    fullName: 'TabNext Asia',
    duration: '2018 March - 2018 Dec',
    jobTitle: 'Junior Front-end Developer',
    url: 'https://www.tabnext.asia/',
    duties: [
      'Developed and maintained <b>user-friendly front-end interfaces</b> for web applications, with a focus on usability, accessibility, and performance.',
      'Collaborated with the development team to design and implement user interfaces that meet <b>business requirements</b> and adhere to design standards.',
      'Implemented <b>responsive design principles</b> to ensure that web applications function smoothly across all devices and screen sizes.'
    ]
  },
  {
    shortName: 'HKET',
    value: 4,
    fullName: 'Hong Kong Economic Times',
    duration: '2017 June - 2017 Aug',
    jobTitle: 'IT support Engineer',
    url: 'https://www.hket.com/',
    duties: [
      'Wrote <b>Bash scripts</b> to automate tasks, such as remote access control and device maintenance, improving efficiency.',
      'Investigated and resolves technical issues reported by end-users.',
      'Provided <b>Level 1 technical support</b> to end-users via phone, email, or in-person, ensuring timely resolution of issues and minimal downtime.',
      'Installed and configured software applications and hardware devices'
    ]
  },
  {
    shortName: 'Initium',
    value: 5,
    fullName: 'Initium Media',
    duration: '2017 Mar - 2017 Aug',
    jobTitle: 'QA Engineer',
    url: 'https://theinitium.com/',
    duties: [
      'Developed automated test suites in <b>Python</b> to test RESTful APIs, reducing the time and effort required for manual testing.',
      'Analyzed new features and changes to existing features, and wrote test cases to ensure proper functionality and regression testing.',
      'Tracked and managed defects using <b>Jira</b>, including creating and assigning tickets, monitoring resolution status, and verifying fixes.'
    ]
  }
]
const tab = ref('one')
</script>

<style scoped>
.jobDuration {
  font-style: italic;
  color: #424242;
}

.roleDetails {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.companyTitle {
  color: #c69749;
  cursor: pointer;
  font-size: 16px;
}

h1 {
  font-size: 48px;
  color: #562b08;
}

h2 {
  padding: 12px 12px 12px 0px;
}

h3 {
  padding-right: 12px;
}

p {
  padding-bottom: 12px;
  font-size: 16px;
}

.v-card-text {
  padding: 0rem;
}
.v-slide-group {
  min-width: 120px;
}

#ExperienceContainer {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.ExperienceContent {
  width: 60%;
}

@media (min-width: 1281px) {
  #ExperienceContainer {
    min-height: 80vh;
  }
}

@media (max-width: 1280px) {
  #ExperienceContainer {
    min-height: 110vh;
  }
}

@media (max-width: 980px) {
  .ExperienceContent {
    width: 80%;
  }
}
</style>
