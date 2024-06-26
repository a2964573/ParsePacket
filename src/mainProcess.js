console.log("Starting main.js");

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.webContents.openDevTools();

    win.loadFile("src/index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if(ProcessingInstruction.platform !== "darwin"){
        app.quit();
    }
});