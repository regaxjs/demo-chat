import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.renderClient('home.js', {
      title: 'Regax Chat Demo',
    });
  }
}
