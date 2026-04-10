// app.js

document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const themeSelect = document.getElementById('theme-select');
  const saveButton = document.getElementById('save-button');

  let currentTheme = 'default';

  async function loadThemes() {
    try {
      const themes = await fetch('/api/themes').then(res => res.json());
      themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.name;
        option.textContent = theme.label;
        themeSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error loading themes:', error);
      showNotification('Failed to load themes.', 'error');
    }
  }

  function updateTheme() {
    currentTheme = themeSelect.value;
    editor.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--bg-${currentTheme}`);
    preview.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--bg-${currentTheme}`);
  }

  function renderPreview() {
    const markdown = editor.value;
    try {
      preview.innerHTML = marked(markdown);
    } catch (error) {
      console.error('Error rendering preview:', error);
      showNotification('Failed to render preview.', 'error');
    }
  }

  async function saveMarkdown() {
    try {
      const markdown = editor.value;
      await fetch('/api/markdown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown })
      });
      showNotification('Markdown saved successfully.', 'success');
    } catch (error) {
      console.error('Error saving markdown:', error);
      showNotification('Failed to save markdown.', 'error');
    }
  }

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  editor.addEventListener('input', renderPreview);
  themeSelect.addEventListener('change', updateTheme);
  saveButton.addEventListener('click', saveMarkdown);

  loadThemes();
  updateTheme();
  renderPreview();
});
```

```css
/* style.css */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-card: #1c2128;
  --accent-color: #58a6ff;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  color: #fff;
  background-color: var(--bg-primary);
}

header {
  background-color: var(--bg-secondary);
  padding: 1rem;
  text-align: center;
}

main {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

#editor-container, #preview-container {
  width: 48%;
  min-height: calc(100vh - 6rem);
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
}

#editor-container {
  background-color: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

#preview-container {
  background-color: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.notification {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.notification.info {
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 4px solid var(--accent-color);
}

.notification.success {
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #3fb950;
}

.notification.error {
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #ff6b6b;
}