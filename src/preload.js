const { contextBridge } = require("electron");

console.log("Starting Preload.js");

contextBridge.exposeInMainWorld("api", {
    print: (message) => {
        console.log(message);
    }
});
