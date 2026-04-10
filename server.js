const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

async function getThemes() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'themes.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading themes:', error);
    throw new Error('Failed to load themes.');
  }
}

async function saveMarkdown(content) {
  try {
    await fs.writeFile(path.join(__dirname, 'data', 'markdown.txt'), content, 'utf8');
    return { success: true, message: 'Markdown saved successfully.' };
  } catch (error) {
    console.error('Error saving markdown:', error);
    throw new Error('Failed to save markdown.');
  }
}

app.get('/api/themes', async (req, res) => {
  try {
    const themes = await getThemes();
    res.status(200).json({ success: true, data: themes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/markdown', async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, error: 'Content is required.' });
    }
    const result = await saveMarkdown(content);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});