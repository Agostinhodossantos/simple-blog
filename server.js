const express = require('express')
const mongoose = require('mongoose')
const app = express();
const articleRouter = require('./routes/article')

mongoose.connect('mongodb://localhost/blog' , {
    useNewUrlParser: true , useUnifiedTopology: true
})

app.set('view engine' , 'ejs')

app.use('/article', articleRouter)

app.get('/' , (req , res) => {
    const articles = [{
        title: 'Test Aricle',
        createAt: new Date(),
        description: "Test description"
    },
    {
        title: 'Test Aricle 2',
        createAt: new Date(),
        description: "Test description 2"
    }


]
    res.render('articles/index' , {articles : articles}) 
})

app.listen(5000)