"use strict";
const { app } = require("electron");
const { newControlPanel } = require('./ControlPanelAdapter');
const { bootstrap } = require('./ipc');
let control_panel;
app.whenReady().then(() => {
    control_panel = newControlPanel();
    bootstrap(control_panel);
});
app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        console.log('App closing!');
        app.quit();
    }
});
