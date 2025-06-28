# ChatGPT Summarizer Chrome Extension

A Chrome extension that summarizes web pages using ChatGPT.

## Features

- Click the extension button in the toolbar to send the URL of the current page to ChatGPT
- Generates summaries in Japanese using ChatGPT's o4-mini model
- No API key required - works directly with ChatGPT web interface

## Installation

1. Open `chrome://extensions/` in Chrome
2. Turn ON "Developer mode" in the top right
3. Click "Load unpacked"
4. Select this folder

## Usage

1. Open the web page you want to summarize
2. Click the extension icon (white "S") in the toolbar
3. ChatGPT will open in a new tab and generate a summary of the page

## File Structure

- `manifest.json` - Chrome extension configuration file
- `background.js` - Button click handler
- `icons/` - Extension icon files
  - `icon16.png` - 16x16 icon
  - `icon32.png` - 32x32 icon
  - `icon48.png` - 48x48 icon
  - `icon128.png` - 128x128 icon