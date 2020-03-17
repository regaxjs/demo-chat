import { RPC } from '@regax/server'

export default class ChatRPC extends RPC {
  add(uid: string, serverId: string, rid: string): void {
    const channel = this.service.channel.getChannel(rid, true);
    channel.add(uid, serverId)
    channel.pushMessage('onRoomChange', channel.getMembers())
  }
  leave(uid: string, serverId: string, rid: string) {
    const channel = this.service.channel.getChannel(rid);
    if (channel) {
      channel.leave(uid, serverId)
      if (channel.size !== 0) {
        channel.pushMessage('onRoomChange', channel.getMembers())
      }
    }
  }
}
