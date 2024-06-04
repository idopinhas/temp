const express = require('express');
const app = express();
const port = 3000;

// Endpoint to get photos
app.get('/photos', (req, res) => {
    const photos = [
        'https://example.com/photo1.jpg',
        'https://example.com/photo2.jpg',
        'https://example.com/photo3.jpg'
    ];
    res.json(photos);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});