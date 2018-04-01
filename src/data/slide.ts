import { SlideAction } from 'data/slide-action';

export class Slide {
  title: String;
  description: String;
  actions: Array<SlideAction>;

  static create(config: any): Slide {
    if (!config) {
      return new Slide();
    }

    return new Slide(config);
  }

  constructor(config: any = {}) {
    const title: string = config.title;
    const description: string = config.description;
    const actions: Array<any> = config.actions;

    this.title = typeof title === 'string' ? title : '';
    this.description = typeof description === 'string' ? description : '';
    this.actions = Array.isArray(actions) ? actions.map(SlideAction.create) : [];
  }

  addAction() {
    this.actions.push(new SlideAction());
  }

  removeAction(action: SlideAction | number) {
    const index = (typeof action === 'number') ? action : this.actions.indexOf(action);
    this.actions.splice(index, 1);
  }
}
