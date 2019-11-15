const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(require('cors')())

app.get('/getlist',(req,res) => {
    fs.readFile('./db.json','utf-8',(err,data) => {
        if(err) {
            console.log('读取失败')
        } else {
            res.send(data)
        }
    })
})

app.post('/addone',(req,res) => {
    //console.log(req.body)
    let cat = req.body
    fs.readFile('./db.json','utf-8',(err,data) => {
        if(err) {
            console.log('读取失败')
        } else {
            let list = JSON.parse(data).catList
            list.push(cat)
            console.log(list)
            let json = JSON.stringify({catList:list})
            fs.writeFile('./db.json',json,(err,data) => {
                if(err) {
                    console.log('写入失败')
                } else {
                    console.log(data)
                }
            }) 
        }
    })
    res.send('okkk')
})

app.listen(3000,() => {
    console.log('running...')
})