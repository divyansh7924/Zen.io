chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.executeScript(null, {
        file: "executor.js"
    });
});