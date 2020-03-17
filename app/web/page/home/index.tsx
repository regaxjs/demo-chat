import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Client } from '@regax/client-websocket'

const { websocketUrl } = window.__INITIAL_STATE__

class Home extends React.Component<any, any> {
  state = {
  }
  async componentDidMount() {
    const client = new Client({ url: websocketUrl, reconnect: true })
    await client.connect()
    // 监听房间变化
    client.on('onChat', (d: any) => {
      console.log('>>>> client1 get message: ', d)
    })
    await client.request('connector.user.enter', { rid: 'room1', username: 'client1' })
    console.log('client1 enter the room')
    client.request('chat.chat.send', { target: '*', content: 'hello world' })
  }
  render() {
    return <div>home</div>
  }
}
const root = document.getElementById('app');

ReactDOM.render(<Home />, root)
