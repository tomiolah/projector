exports.newWindow = (
  htmlFile: string,
  width: number = 300,
  height: number = 300,
  devTools: boolean = true
): Electron.BrowserWindow => {
  const e = require('electron');
  const win = new e.BrowserWindow({
    width, height,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.menuBarVisible = false;
  win.loadFile(htmlFile);
  if (devTools) win.webContents.openDevTools();
  return win;
}