import express from 'express';

const app = express();
const port = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Everything is hello' });
    });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 
