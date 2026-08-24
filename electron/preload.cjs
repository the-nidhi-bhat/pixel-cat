const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('pixelCat', {
  notify: (title, body) => ipcRenderer.invoke('pixel-cat:notify', title, body),
  onBreak: (callback) => ipcRenderer.on('pixel-cat:break', callback),
})
