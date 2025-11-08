chrome.action.onClicked.addListener((tab) => {
  const currentUrl = tab.url;
  const prompt = encodeURIComponent(`${currentUrl} を日本語で要約してください`);
  const chatGptUrl = `https://chat.openai.com/?q=${prompt}`;
  
  chrome.tabs.create({ url: chatGptUrl });
});