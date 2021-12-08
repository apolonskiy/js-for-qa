import express from 'express';
const app = express();

app.get('/test', (req, res) => {
    res.send('Kill Corona!');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})