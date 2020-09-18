exports.newControlPanel = (): Electron.BrowserWindow => 
  require('./helper').newWindow('./modules/ControlPanel/index.html', 1200, 600);