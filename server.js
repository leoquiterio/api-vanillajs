const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

const port       = process.env.PORT || 3000;
const app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('resources'));

app.get('/', (req, res) => {
    res.redirect('/api');
});

app.get('/api', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));