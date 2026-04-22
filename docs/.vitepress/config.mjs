import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Konsolideringsparathed',
  description: 'Procesguide: Redundante datacentre med HCI-platform',
  lang: 'da-DK',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Oversigt', link: '/' },
      { text: 'Faser', link: '/faser/01-netvaerk' },
    ],
    sidebar: [
      {
        text: 'Procesguide',
        items: [
          { text: 'Oversigt & parallelisering', link: '/' },
        ]
      },
      {
        text: 'Kritisk sti',
        items: [
          { text: 'Fase 1: Netværksarkitektur', link: '/faser/01-netvaerk' },
          { text: 'Fase 2: HCI-platform', link: '/faser/02-hci' },
          { text: 'Fase 3: Storage & replikering', link: '/faser/03-storage' },
        ]
      },
      {
        text: 'Parallelle faser',
        items: [
          { text: 'Fase 4: Mikrosegmentering', link: '/faser/04-mikrosegmentering' },
          { text: 'Fase 5: Identitetsstyring', link: '/faser/05-iam' },
          { text: 'Fase 6: IaC & automatisering', link: '/faser/06-iac' },
          { text: 'Fase 7: Standardisering & CMDB', link: '/faser/07-standardisering' },
          { text: 'Fase 8: Governance & SLA', link: '/faser/08-governance' },
        ]
      },
      {
        text: 'Validering & go-live',
        items: [
          { text: 'Fase 9: DR-test & hærdning', link: '/faser/09-dr-test' },
          { text: 'Fase 10: Onboarding', link: '/faser/10-onboarding' },
        ]
      },
    ],
    outline: { level: [2, 3], label: 'På denne side' },
    search: { provider: 'local' },
    docFooter: { prev: 'Forrige fase', next: 'Næste fase' },
  },
})
