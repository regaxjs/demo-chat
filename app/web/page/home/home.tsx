import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Client } from '@regax/client-websocket'
import './home.less'

const { websocketUrl, roomId } = window.__INITIAL_STATE__

class Home extends React.Component<any, any> {
  state: any = {
    connectState: 'connecting',
    roomName: roomId,
    clients: [],
    chatList: [],
    username: 'Client' + '_' + Date.now(),
  }
  client: Client

  constructor(props) {
    super(props);
    this.client = new Client({ url: websocketUrl, reconnect: true })
    // 监听房间变化
    this.client.on('onChat', (d: any) => {
      console.log(d)
      this.setState({
        chatList: this.state.chatList.concat(d)
      })
    })
    this.client.on('disconnect', () => {
      this.setState({ connectState: 'disconnect' })
    })
    this.client.on('onRoomChange', (clients) => {
      this.setState({ clients })
    })
  }

  async componentDidMount() {
    const client = this.client
    await client.connect()
    await client.request('connector.user.enter', { rid: this.state.roomName, username: this.state.username })
    this.setState({ connectState: 'connected' })
  }
  onInput = (e) => {
    if (e.keyCode === 13) {
      this.client.request('chat.chat.send', { target: '*', content: e.target.value.trim() })
      e.target.value = ''
    }
  }
  render() {
    const state = this.state
    return <div>
      <div className={'chat-state ' + state.connectState}>
        {state.username} {state.connectState}
      </div>
      <div className="home">
        <div className="chat-header">
          { state.roomName }
        </div>
        <div className="chat-body">
          {state.chatList.map((d, i) => (
            <div key={i} className={'chat-item' + (d.from === state.username ? ' mime' : '')}>
              <div className="chat-item-from">{d.from} say: </div>
              <div className="chat-item-msg">{d.msg}</div>
            </div>
          ))}
        </div>
        <div className="chat-sider">
          <ul className="chat-clients">
            {state.clients.map(name => <li key={name}>{name}</li>)}
          </ul>
          <div className="chat-count"> {state.clients.length} online</div>
        </div>
        <div className="chat-bottom">
          <input onKeyDown={this.onInput} />
        </div>
      </div>
    </div>
  }
}
const root = document.getElementById('app');

ReactDOM.render(<Home />, root)
