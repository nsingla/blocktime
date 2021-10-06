const {app, BrowserWindow} = require('electron');
const path = require('path');


function createWindow(){
    let win = new BrowserWindow({
        width: 260,
        height: 290,
        resizable: false,
        frame: true,
        transparent: false,
        webPreferences: {nodeIntegration: true},
        alwaysOnTop: true,
        icon: __dirname + '/assets/favicon.svg'
    })
    win.removeMenu();
    win.loadFile(path.join(__dirname, 'index.html'));
    win.on('closed', () => {win = null;})
    // win.webContents.openDevTools();
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {app.quit();})

