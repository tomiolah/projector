"use strict";
let text_content = ``;
const content = document.getElementById('content');
const { ipcRenderer } = require("electron");
ipcRenderer.on('ipc::new_text', (_, text) => {
    text_content = text;
    content.innerText = text_content;
});
