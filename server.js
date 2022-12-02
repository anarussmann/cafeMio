const express = require('express')
const app = express()
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');

app.use(express.static('public'));

//ruta raíz de INDEX
app.get('/', function (req, res) {
    res.render('index', {
        titulo: "Mi página web"
    })

})


app.listen(3000, () => {
    console.log ('Listening on port 3000')
})