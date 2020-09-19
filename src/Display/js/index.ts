let text_content: string = ``;

const content = document.getElementById('content')!;

const { ipcRenderer } = require("electron");

ipcRenderer.on('ipc::new_text', (_, text: string) => {
  text_content = text;
  content.innerText = text_content;
  let longestLine = text_content
    .split('\n')
    .map(v => v.length)
    .reduce((prev, curr) => (prev > curr) ? prev : curr);
  content.style.fontSize = `calc(85vh / ${text_content.split('\n').length} - 15vw / ${longestLine})`;
});