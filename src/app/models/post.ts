export class NuovoPost {
  title: string;
  body: string;

  constructor(title: string = '', body: string = '') {
    this.title = title;
    this.body = body;
  }
}
