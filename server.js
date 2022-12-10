const express = require('express')
const app = express()
const hbs = require('hbs');
//const productos = require('./data/products.json')
//const path = require('path');

const port = 3000

app.set('view engine', 'hbs'); // indica que usaremos la plantilla "handlebars"

/*app.set('views',[
  path.join('./views/front'),
  path.join('./views/back'),
  path.join('./views')
])*/

hbs.registerPartials(__dirname + '/views/partials'); // indicamos el directorio hacia los parciales

// Cuando voy a la raiz, entonces se ejecutan las siguientes instrucciones, por ejemplo, responde con renderizar el archivo index, que se encuentra en la carpeta views.
app.get('/', (req, res) => {
	res.render('index', {
		titulo: "Mi página web",
		//productos: productos[0].data
	})
}) 

app.use(express.static('public')); // indica la carpeta public para considerar archivos estáticos


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
      //productos: productos.products
      //,
      //  *******Ana**** ver ojo 
      //productos: productos[0].data
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
app.get('/producto1', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('producto1',{ 
      titulo: "Tazas de café"
  })

})

app.get('/producto2', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('producto2',{ 
      titulo: "Croisant"
  })

})

app.get('/item-producto3', (req, res) => {
  // (indica el nombre del archivo hbs, objeto)
  res.render('item-producto3',{ 
      titulo: "Granel"
  })

})


// BACK
/*app.get('/admin', (req, res) => {
	res.render('admin', {
		titulo: "Panel de control",
		productos: productos[0].data
	})
})

app.get('/agregar-producto', (req, res) => {
	console.log("estas en agregar")
	res.render('agregar-producto', {

	})
})

app.get('/editar-producto', (req, res) => {
	console.log("estas en editar")
	res.render('editar-producto', {

	})
})

//app.get('/login', (req, res) => {
	//console.log("estas en login")
	//res.render('login', {

	//})
//})  ojo ana que esto tenes que modificarlo

app.use((req, res, next) => {
	res.status(404).render('404', {
		titulo: "404 - No encontrado"
	})
})*/





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})