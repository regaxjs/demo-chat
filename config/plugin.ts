import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  reactssr: {
    enable: true,
    package: 'egg-view-react-ssr'
  },
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  regax: {
    enable: false,
    package: '@regax/egg-regax',
  }
};

export default plugin;
