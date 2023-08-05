chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('hulu.com/hub/home')
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
    // send message to content scripts to remove attribute from video tag with "VideoPreviewPlayer" class
    // chrome.tabs.sendMessage(tabId, { pageLoaded: true });
  }
});
