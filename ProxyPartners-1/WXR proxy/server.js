const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Use the environment port provided by the hosting platform (or fallback to 3000 for local testing)
const port = process.env.PORT || 3000;

// Serve static files (like your HTML page)
app.use(express.static('public'));  // If you have static files, like images, put them in a 'public' folder.

// Root route that serves the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Serve the 'index.html' file
});

// Proxy route that fetches the requested URL
app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('No URL provided');
    }

    try {
        const response = await axios.get(url, { timeout: 5000 }); // Add timeout to prevent hanging
        res.send(response.data);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send('Error fetching the URL');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});
