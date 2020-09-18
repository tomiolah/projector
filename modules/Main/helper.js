"use strict";
exports.newWindow = (htmlFile, width = 300, height = 300, devTools = true) => {
    const e = require('electron');
    const win = new e.BrowserWindow({
        width, height,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.menuBarVisible = false;
    win.loadFile(htmlFile);
    if (devTools)
        win.webContents.openDevTools();
    return win;
};
