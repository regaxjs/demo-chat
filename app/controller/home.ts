import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    await ctx.renderClient('home.js', {
      websocketUrl: 'ws://127.0.0.1:8089',
      roomId: ctx.params.roomId || 'regax_chat_room',
    })
  }
}
