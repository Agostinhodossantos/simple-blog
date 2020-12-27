const express = require('express')
const app = express();
const articleRouter = require('./routes/article')

app.set('view engine' , 'ejs')

app.use('/articles', articleRouter)

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
    res.render('index' , {articles : articles}) 
})

app.listen(5000)