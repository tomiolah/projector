"use strict";
const { ipcMain } = require("electron");
const { newDisplayWindow } = require("./DisplayAdapter");
let displays = [];
// Creating a new Display
ipcMain.on('ipc::new_display', (_) => {
    let dp = newDisplayWindow();
    dp.on('close', () => {
        console.debug(`Display #${displays.length} closed!`);
        displays = displays.filter(v => v !== dp);
    });
    displays.push(dp);
    console.debug(`Display #${displays.length} created!`);
});
// Sending new text to all Displays
ipcMain.on('ipc::send_text', (_, text) => {
    console.debug({ text });
    displays.forEach(d => d.webContents.send('ipc::new_text', text));
});
// Bootstrapping ControlPanel close event to close all Displays, too
exports.bootstrap = (control_panel) => {
    control_panel.on('close', () => displays.forEach(d => d.close()));
};
