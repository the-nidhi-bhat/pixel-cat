# Privacy

Pixel Cat is designed local-first. The current website does not collect account data, analytics, typed content, clipboard data, screenshots, files, or browsing history. The Electron shell exposes no unrestricted Node APIs to its renderer.

Global activity detection is not implemented in this scaffold. If it is added, it must process only coarse activity signals locally, never store keystrokes, and never transmit activity data. Settings should remain on-device.
