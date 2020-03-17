import { ApplicationOpts } from '@regax/server'

export default function configDefault(): ApplicationOpts {
  return {
    master: {
      servers: [
        { serverType: 'connector', sticky: true, clientPort: 8089 },
        { serverType: 'connector', sticky: true, clientPort: 8089 },
        { serverType: 'chat' },
        { serverType: 'chat' },
      ],
    }
  }
}
