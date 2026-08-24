module.exports = {
  packagerConfig: { name: 'Pixel Cat', executableName: 'pixel-cat', asar: true },
  rebuildConfig: {},
  makers: [
    { name: '@electron-forge/maker-squirrel', config: { name: 'pixel_cat' } },
    { name: '@electron-forge/maker-zip', platforms: ['win32', 'darwin'] },
  ],
}
