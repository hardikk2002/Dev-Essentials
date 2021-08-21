chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('http')) {
        chrome.tabs.executeScript(tabId, { file: './inject_script.js' }, function () {
            chrome.tabs.executeScript(
              tabId,
              { file: "./blogs.bundle.js" },
              function () {
                console.log("INJECTED AND EXECUTED");
              }
            );
        });
    }
});