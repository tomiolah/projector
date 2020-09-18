const { ipcRenderer } = require("electron");

function send_text(text: string): void {
  ipcRenderer.send('ipc::send_text', text);
}

const clear = () => send_text('');

function new_display(): void {
  ipcRenderer.send('ipc::new_display');
}

document.getElementById('clear-btn')!.onclick = clear;
document.getElementById('new-display-btn')!.onclick = new_display;

export {send_text, clear}