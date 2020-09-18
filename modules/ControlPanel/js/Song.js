export default class Song {
    constructor() {
        this.addSection = (name, text) => {
            this.sections.set(name, text);
            this.roadmap.push(name);
        };
        this.toString = () => {
            return JSON.stringify({
                sections: this.sections,
                roadmap: this.roadmap
            });
        };
        this.sections = new Map();
        this.roadmap = new Array();
    }
}
