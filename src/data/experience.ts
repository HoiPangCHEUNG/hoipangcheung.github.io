import { cuhk, hket, initium, prisec, scmp, tabNext } from '@/constant/link'
import { Experience } from '@/models/experience'

const getLink = (url: string, title: string) => {
  return `<a href="${url}" target="_blank">@${title}</a>`
}

export const experiences: Experience[] = [
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
