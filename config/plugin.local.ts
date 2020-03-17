import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  webpack: {
    enable: true,
    package: 'egg-webpack'
  },
  webpackreact: {
    enable: true,
    package: 'egg-webpack-react'
  },
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

export default plugin;
