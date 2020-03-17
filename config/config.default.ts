import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import * as path from 'path'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584431098023_8537'

  // add your egg config in here
  config.middleware = []

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  }

  config.reactssr = {
    layout: path.join(appInfo.baseDir, 'app/web/view/layout.html')
  }
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
