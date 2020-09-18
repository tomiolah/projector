let text_content: string = ``;

const content = document.getElementById('content')!;

const { ipcRenderer } = require("electron");

ipcRenderer.on('ipc::new_text', (_, text: string) => {
  text_content = text;
  content.innerText = text_content;
});