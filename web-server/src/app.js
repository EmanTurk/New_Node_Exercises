const path = require('path')

const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>
{
    res.render('index', {
        name: 'app',
        title: 'hey'
    })
})

app.get('/help' , (req,res)=>{
    res.render('help' ,{
        name: 'app',
        title: 'if you need any help contact us'
    })
})

app.get('', (req, res) =>{
res.send ('<h1> About</h1>')
})

app.get('/products', (req,res) =>
{
    if (!req.query.search){
 return res.send({
    error: "must provide a search term"
})
    }
    req.query
    res.send({
        products: []
    })
})

app.listen (3000, () =>{
    console.log ('server is up on 3000')
})