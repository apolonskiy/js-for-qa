import express from 'express';
const app = express();

app.get('/testRoute', (req, res) => res.send('Kill Corona!'));

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})