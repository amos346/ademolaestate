import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Gemini AI endpoint for property recommendations
  app.post('/api/ai-recommendation', async (req, res) => {
    try {
      const { prompt, preferences } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured in the environment.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are Ademola AI, the elite luxury real estate consultant for Ademola Real Estate in Nigeria (specializing in Lagos like Ikoyi, Eko Atlantic, Lekki Phase 1, Victoria Island, and Abuja like Maitama, Asokoro). 
      Analyze the user's request and preferences, then provide expert, personalized Nigerian real estate advice, investment guidance, neighborhood analysis, and curated property recommendations. Keep it sophisticated, professional, concise, and structured with clear sections. Format in clean Markdown.`;

      const userMessage = `User Budget & Preferences: ${JSON.stringify(preferences || {})}
      User Query: ${prompt || 'Suggest the best luxury property investment in Lagos right now.'}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ recommendation: response.text });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: error.message || 'Failed to generate AI recommendation' });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
