const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
let cards = [
    {id:'1', name:'First card', status:'todo', priority: 3},

    {id:'2', name:'Second card', status:'progress', priority: 3},

    {id:'3', name:'Third card', status:'done', priority: 5}
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/card', (req, res) => {
    res.send(cards);
})

app.delete('/card/:cardId', (req, res) => {
    console.log(req.params.cardId)
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
})

app.post ('/card',(req,res) =>
{
    console.log(req);
    const card = req.body;
    cards.push({id:Math.random().toString(),...card});



    res.send('card created');
})



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})