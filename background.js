chrome.action.onClicked.addListener((tab) => {
  const currentUrl = tab.url;
  const prompt = encodeURIComponent(`次のURLの記事を要約してください。
${currentUrl}

要約は次の構成でお願いします。

- 概要：記事全体の主旨・テーマを数行でまとめてください。
- 章・節ごとの要約：
    - 記事内の章や節（見出し構造）に沿って、それぞれの内容を簡潔にまとめてください。
    - 各見出しを太字にし、要約文は段落で整理してください。`);
  const chatGptUrl = `https://chat.openai.com/?q=${prompt}`;
  
  chrome.tabs.create({ url: chatGptUrl });
});
