const input = document.getElementById('input-text');

let song_to_send = undefined;
let verse_to_send = undefined;

class Song {
  constructor() {
    this.sections = {};
    this.roadmap = []
  }

  addSection = (name, text) => {
    this.sections[name] = text;
    this.roadmap.push(name);
  }

  serialize = () => {
    return {
      sections: this.sections,
      roadmap: this.roadmap
    };
  }
}

const parse = text => {
  const sections = text.split(/\n\n/);
  const song = new Song();
  sections.forEach((s, i) => {
    let lines = s.split(/(\r)?\n/).filter(val => val && val !== '');
    let name = `section-${i}`;
    if (/\[[a-z0-9]+\]/.test(lines[0])) {
      name = lines[0].replace('[', '').replace(']', '');
      lines.shift();
    }
    if (name === 'map') {
      song.roadmap = lines[0].split(' ').filter(v => v && v !== '');
    } else {
      song.addSection(name, lines.filter(v => v).map(v => v === '---' ? '' : v));
    }
  });
  return song;
}

input.oninput = () => {
  song_to_send = parse(input.value);
  let ctrl = document.getElementById('components');
  ctrl.innerHTML
}

const { ipcRenderer } = require('electron');

async function send_text() {
}