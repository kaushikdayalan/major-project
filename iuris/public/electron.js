/*
This script is used to start electron.
electron is a framework which allows us to render a webpage in 
an application view with chromium extension
*/

const electron = require("electron"); 
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");


let mainWindow;
//console.log(__dirname);
const createWindow = ()=>{
    mainWindow = new BrowserWindow({width:800, height:600});
    
    mainWindow.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname,"../build/index.html")}`
    )
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
