const { app, BrowserWindow } = require('electron')
const path = require('path')
const createTray = require('./mainTray')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // show: false,
        icon: "public/app.ico",
        frame: false,
        fullscreen: true,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.on('ready-to-show', win.show)
    // 本地起vue3项目
    // win.loadURL('http://localhost:3000')
    process.env.DIST = path.join(__dirname, './')
    const indexHtml = path.join(process.env.DIST, '/dist/index.html')
    win.loadFile(indexHtml)
    // win.loadURL(`file://${__dirname}/build/index.html`)
    // 打开调试器
    // win.webContents.openDevTools()
    // 创建托盘,托盘的关闭可以关掉后台 
    createTray(app, win)
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform === 'darwin') app.quit()
})
