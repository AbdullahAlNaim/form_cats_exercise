const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/scripts')));
app.use(express.static(path.join(__dirname, 'public/style')));
app.use(express.static(path.join(__dirname, 'public/views')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/kats', (req, res) => {
    res.sendFile(__dirname + '/public/views/kitties.html');
    res.send('hey cats')
})


// app.get('/', (req, res) => {
//     res.render('index', { title: 'Express' })
// })

app.get('/cats', (req, res, next) => {
    let cats = {
        'Dawn': {
            'owner': 'Abdullah',
            'age': 4,
            'breed': 'short hair'
        },
        'Luna': {
            'owner': 'Fahmia',
            'age': 2,
            'breed': 'short hair'
        }
    }
    res.send(cats)
})

app.listen(port, () => {
    console.log(`Server ${port} is running...`)
})