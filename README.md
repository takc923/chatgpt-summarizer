# ChatGPT Summarizer Chrome Extension

ChatGPTを使用してWebページを要約するChrome拡張機能です。

## 機能

- ツールバーの拡張ボタンをクリックすると、現在開いているページのURLをChatGPTに送信します
- ChatGPTのo4-miniモデルを使用して日本語で要約を生成します

## インストール方法

1. Chromeで `chrome://extensions/` を開きます
2. 右上の「デベロッパーモード」をONにします
3. 「パッケージ化されていない拡張機能を読み込む」をクリックします
4. このフォルダを選択します

## 使い方

1. 要約したいWebページを開きます
2. ツールバーの拡張機能アイコン（白い"S"）をクリックします
3. ChatGPTが新しいタブで開き、ページの要約を生成します

## ファイル構成

- `manifest.json` - Chrome拡張機能の設定ファイル
- `background.js` - ボタンクリック時の処理
- `icon*.png` - 拡張機能のアイコン（16x16, 32x32, 48x48, 128x128）