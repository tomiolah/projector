const { app, BrowserWindow, ipcMain } = require('electron');

const newWindow = (html, width = 300, height = 300) => {
  const win = new BrowserWindow({
    width, height,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.menuBarVisible = false;
  win.loadFile(html);
  win.webContents.openDevTools();
  return win;
}

const newDisplayWindow = () => newWindow('./components/Display/index.html', 600, 600);
const newControlPanel = () => newWindow('./components/ControlPanel/index.html', 1200, 600);

let control_panel = undefined;
let displays = [];

app.whenReady().then(() => {
  control_panel = newControlPanel();
});

ipcMain.on('ipc::new_display', (event) => {
  let dp = newDisplayWindow();
  dp.on('close', () => {
    displays = displays.filter(value => value !== dp);
  });
  displays.push(dp);
});

ipcMain.on('ipc::send_text', (event, text) => {
  displays.forEach(d => d.webContents.send('ipc::new_text', text));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    console.log('App closing');
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    newDisplayWindow('test/test.html');
  }
});