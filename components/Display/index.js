const text_content = `Come, Thou Fount of every blessing
Tune my heart to sing Thy grace
Streams of mercy, never ceasing
Call for songs of loudest praise
Teach me some melodious sonnet
Sung by flaming tongues above
Praise the mount, I'm fixed upon it
Mount of Thy redeeming love.`;

document.getElementById('content').innerText = `${text_content}`;

const { ipcRenderer } = require('electron');

ipcRenderer.on('ipc::new_text', (event, newText) => {
  text_content = newText;
  document.getElementById('content').innerText = `${text_content}`;
});