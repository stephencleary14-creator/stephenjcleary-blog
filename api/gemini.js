module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured — env var missing' });
  }

  try {
    // Force JSON mime type regardless of what the client sent
    const body = {
      ...req.body,
      generationConfig: {
        ...(req.body.generationConfig || {}),
        responseMimeType: 'application/json'
      }
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: `Gemini returned ${response.status}`,
        detail: data
      });
    }

    // Extract and validate JSON from the text before returning
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      const start = text.indexOf('{');
      const end   = text.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        const extracted = text.slice(start, end + 1)
          .replace(/\/\/[^\n]*/g, '')
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/,\s*([}\]])/g, '$1');
        try {
          // Validate it parses, then return the cleaned text
          JSON.parse(extracted);
          data.candidates[0].content.parts[0].text = extracted;
        } catch (e) {
          // Return raw text and let client handle the error
        }
      }
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
