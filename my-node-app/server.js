const express = require('express');
const app = express();
const path = require('path');

// Set the 'views' directory for views/templates
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a new route to render a page using EJS
app.get('/about', (req, res) => {
  res.render('about'); // Renders 'about.ejs' from the 'views' directory
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
