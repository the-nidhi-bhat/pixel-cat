const { app, BrowserWindow, Menu, Tray, ipcMain, nativeImage, Notification } = require('electron')
const path = require('node:path')

let window
let tray

function createWindow() {
  window = new BrowserWindow({
    width: 420,
    height: 620,
    minWidth: 360,
    minHeight: 520,
    show: false,
    title: 'Pixel Cat',
    backgroundColor: '#fff8ef',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  })

  const devUrl = process.env.PIXEL_CAT_DEV_URL
  if (devUrl) window.loadURL(devUrl)
  else window.loadFile(path.join(__dirname, 'renderer.html'))
  window.once('ready-to-show', () => window.show())
}

function createTray() {
  tray = new Tray(nativeImage.createEmpty())
  tray.setToolTip('Pixel Cat')
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Show Pixel Cat', click: () => window.show() },
    { label: 'Take a break', click: () => window.webContents.send('pixel-cat:break') },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() },
  ]))
}

app.whenReady().then(() => {
  createWindow()
  createTray()
  ipcMain.handle('pixel-cat:notify', (_event, title, body) => {
    if (Notification.isSupported()) new Notification({ title, body }).show()
  })
})

app.on('window-all-closed', (event) => event.preventDefault())
app.on('before-quit', () => { if (tray) tray.destroy() })
