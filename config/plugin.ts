import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  regax: {
    enable: true,
    package: '@regax/egg-regax',
  }
};

export default plugin;
