import etaApp from '@/assets/etaApp.jpeg'
import personalProj from '@/assets/personalProj.jpeg'
import translator from '@/assets/translator.jpeg'
import {
  aboutMeGithub,
  aboutMeSite,
  chatGptJsonTranslatorGitHub,
  ttcNextGithub,
  ttcNextSite
} from '@/constant/link'
import { ProjectInfo } from '@/models/projectInfo'

export const projects: ProjectInfo[] = [
  {
    title: 'TTC-Next',
    mediaPath: etaApp,
    description:
      'TTC Next is a real-time transit application that provides estimated arrival times (eta) for TTC buses and streetcars',
    site: ttcNextSite,
    githubUrl: ttcNextGithub
  },
  {
    title: 'About Me',
    mediaPath: personalProj,
    description: 'A single page web application that let you know more about me',
    site: aboutMeSite,
    githubUrl: aboutMeGithub
  },
  {
    title: 'ChatGpt JsonTranslator',
    mediaPath: translator,
    description:
      'A simple Python script that translate the content of your jsonFile into different language',
    githubUrl: chatGptJsonTranslatorGitHub
  }
]
