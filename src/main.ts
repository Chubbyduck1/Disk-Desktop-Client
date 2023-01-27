import { app, BrowserWindow } from "electron";

/**
 * Create the Window and load the website
 */
function createWindow(): void {
  const window: BrowserWindow = new BrowserWindow({
    title: "Disk.gg",
    height: 1280,
    width: 800,
  });

  window.setMenu(null);
  window.setTitle("Disk.gg");
  window.maximize();

  window
    .loadURL("https://www.disk.gg/gradients")
    .catch((error): void => console.log(error));

  window.on("page-title-updated", (event: Electron.Event): void =>
    event.preventDefault()
  );
}

/**
 * When the app is ready, create the window
 */
app.whenReady().then((): void => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length !== 0) {
      return;
    }

    createWindow();
  });
});

/**
 * Quit the app when all windows are closed
 */
app.on("window-all-closed", (): void => {
  if (process.platform === "darwin") {
    return;
  }

  app.quit();
});
