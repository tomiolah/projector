const { newWindow } = require('./helper');
 
exports.newDisplayWindow = (): Electron.BrowserWindow =>
  newWindow('./modules/Display/index.html', 600, 600, true);