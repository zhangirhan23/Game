const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    backgroundColor: '#0a0c0f',
    autoHideMenuBar: true,
    title: 'Colony Zero',
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'game', 'index.html'));
  // F11 — полный экран
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
}

Menu.setApplicationMenu(null);
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
