export default class Song {

  sections: Map<string, string[]>;
  roadmap: string[];

  constructor() {
    this.sections = new Map<string, Array<string>>();
    this.roadmap = new Array<string>();
  }

  addSection = (name: string, text: string[]): void => {
    this.sections.set(name, text);
    this.roadmap.push(name);
  }

  toString = (): string => {
    return JSON.stringify({
      sections: this.sections,
      roadmap: this.roadmap
    });
  }
}