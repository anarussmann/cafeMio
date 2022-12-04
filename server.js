const express = require('express')
const app = express()
const hbs = require('hbs');
const productos = require('./data/products.json')

const port = 3000

app.set('view engine', 'hbs'); // indica que usaremos la plantilla "handlebars"
hbs.registerPartials(__dirname + '/views/partials'); // indicamos el directorio hacia los parciales

app.use(express.static('public')); // indica la carpeta public para considerar archivos estáticos



// Cuando voy a la raiz, entonces se ejecutan las siguientes instrucciones, por ejemplo, responde con renderizar el archivo index, que se encuentra en la carpeta views.
app.get('/', (req, res) => {
    // (indica el nombre del archivo hbs, objeto)
    res.render('index',{ 
        titulo: "Mi página web"
    })

})

app.get('/about', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('about',{ 
      titulo: "Sobre nosotros"
  })

})
app.get('/contacto', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('contacto',{ 
      titulo: "contacto"
  })

})

app.get('/products', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('products',{ 
      titulo: "productos",
      productos: productos.products
  })

})

app.get('/store', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('store',{ 
      titulo: "como comprar"
  })

})
app.get('/login', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('login',{ 
      titulo: "Login"
  })

})

//voy a probar de enrutar los productos
app.get('/item-producto1', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('item-producto1',{ 
      titulo: "Taza de café"
  })

})
app.get('/item-producto2', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('item-producto2',{ 
      titulo: "Croisant"
  })

})
app.get('/item-producto3', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('item-producto3',{ 
      titulo: "Granel"
  })

})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})