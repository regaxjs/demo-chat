import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  reactssr: {
    enable: true,
    package: 'egg-view-react-ssr'
  },
  regax: {
    enable: true,
    package: '@regax/egg-regax',
  }
}

export default plugin
