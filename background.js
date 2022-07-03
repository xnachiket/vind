chrome.commands.onCommand.addListener((command) => {
  if (command === "ntab") {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
      if (!tab) return;
      chrome.tabs.sendMessage(tab.id, "getText", (text) => {
        if (text != "") {
          chrome.tabs.create({
            url: "https://www.google.com/search?q=" + encodeURIComponent(text),
          });
        }
      });
    });
  }
});
