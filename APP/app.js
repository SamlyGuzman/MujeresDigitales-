var express = require('express')
var app = express()
const port = 3000;


//  app.get('/',function(request,response){
//      response.send('<h1> Hola mundo</h1>')
//  })

 app.get('/home',function(request,response){
    response.send('<h1> Hola estas en el home</h1>')
})
 //exponer nuestro aplicativo del lado del fontend
 app.use('/',express.static(__dirname + '/pagina'))

app.listen(port,function(){
 console.log('servidor funcionando por el puerto: ' + port)
})
