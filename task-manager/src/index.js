import express from "express";
import '../src/db/mongoose.js';
import  User1 from '../src/models/users2.js';

const app = express()

const port =process.env.PORT || 3000



app.use(express.json())

app.post('/users', (req,res)=>{
  const user = new User1(req.body)
  user.save().then(()=>
{
    res.send(user)
}).catch((e)=>{
    res.status(400).send(e)
})
})



app.listen(port, () =>{
    console.log ('server is up on port ' + port)
})