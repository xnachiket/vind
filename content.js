chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (
    msg === "getText" &&
    document.hasFocus() &&
    (!document.activeElement ||
      !/^i?frame$/.test(document.activeElement.localName))
  ) {
    sendResponse(getSelection().toString());
  }
});
