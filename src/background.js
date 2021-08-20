chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('http')) {
        chrome.tabs.executeScript(tabId, { file: './inject_script.js' }, function () {
            chrome.tabs.executeScript(tabId, { file: './foreground.bundle.js' }, function () {
                console.log('INJECTED AND EXECUTED');
            });
        });
    }
});