import Song from "./Song.js";
import { send_text } from "./ipc.js";
let s2s = new Song();
function parse(text) {
    const sections = text.split(/\n\n/);
    const song = new Song();
    sections.forEach((s, i) => {
        let lines = s
            .split(/(\r)?\n/)
            .filter(val => val && val !== '');
        let t = (/\[[a-zA-Z0-9]+\]/.test(lines[0]?.replace(/\s/, '') ?? ''));
        let name = t ? lines[0]
            .replace('[', '')
            .replace(']', '')
            : `section-${i}`;
        if (t)
            lines.shift();
        if (name === 'map' && lines[0]) {
            song.roadmap = lines[0]
                .split(' ')
                .filter(v => v && v !== '');
        }
        else
            song.addSection(name, lines
                .filter(v => v)
                .map(v => v === '---' ? '' : v));
    });
    return song;
}
function to_dom(song) {
    let t = document.createElement('div');
    t.className = 'song-ctrl';
    song.roadmap
        .map(v => song.sections.get(v)?.join('\n') || '')
        .filter(v => v !== '')
        .map(v => {
        let x = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = v;
        p.className = 'song-part';
        x.className = 'part-div';
        x.appendChild(p);
        x.onclick = (_) => {
            send_text(v);
        };
        return x;
    }).forEach(v => t.appendChild(v));
    return t;
}
const input = document.getElementById('input-text');
const ctrl = document.getElementById('components');
input.oninput = () => {
    s2s = parse(input.value);
    ctrl.innerHTML = '';
    ctrl.appendChild(to_dom(s2s));
};
