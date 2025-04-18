# 📄 LinkedIn Profile Enhancer Widget

## 💡 Overview

A Chrome extension that injects a widget into LinkedIn profile pages, displaying:

- **Company Name** (in bold)
- **Match Score** (0–100) with a progress bar
- **Account Status**: "Target" (green tag) or "Not Target" (red tag)

The widget's visibility can be toggled, and the state is saved using `chrome.storage`.

## 🚀 Features

- Injected UI via `content.js`
- Responsive design within 300px width
- Static JSON data display
- Visibility toggle with persistent state

## 📦 Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the extension directory.
5. Navigate to a LinkedIn profile page (e.g., `https://www.linkedin.com/in/username/`) to see the widget in action.

## 🛠️ Testing

- Visit any LinkedIn profile page.
- The widget should appear automatically.
- Use the toggle button to show/hide the widget.
- The visibility preference is saved across sessions.

## 🧩 Project Structure

```plaintext
linkedin-profile-widget/
├── manifest.json
├── content.js
├── style.css
├── data.json
└── icon.png
