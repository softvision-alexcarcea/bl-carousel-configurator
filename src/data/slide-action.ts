export class SlideAction {
  url: String;
  text: String;

  static create(config: any): SlideAction {
    if (!config) {
      return new SlideAction();
    }

    return new SlideAction(config);
  }

  constructor(config: any = {}) {
    const text: string = config.text;
    this.text = typeof text === 'string' ? text : '';

    const url: string = config.url;
    this.url = typeof url === 'string' ? url : '';
  }
}
