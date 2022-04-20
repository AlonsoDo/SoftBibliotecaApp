var express = require('express');
var bodyParser= require('body-parser');
var methodOverride = require('method-override');
var app = express();
var mysql = require('mysql');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.listen(process.env.PORT || 3000,function(){
    console.log('Server listening on port 3000');
});

app.post('/nuevosocio',function(req,res){ 
    
    console.log(req.body.nombresocio);
    
    /*var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');*/
    
    var client = mysql.createConnection({
      
      user: 'be9dd6c66aae30',
      password: 'd014fad4',
      host: 'eu-cdbr-west-02.cleardb.net',
      port: '3306',
            
    }); 
    client.query('USE heroku_24639f1fc7ccd38');
        
    client.query("INSERT INTO socios(Nombre,PrimerApellido,SegundoApellido,DNI,FechaNacimiento,FechaAlta,Direccion,Email,CodigoPostal,Ciudad,PersonaContacto,TelefonoMovil,TelefonoFijo) VALUES ('"
                 +req.body.Nombre+"','"+req.body.PrimerApellido+"','"+req.body.SegundoApellido+"','"+req.body.DNI+"','"+req.body.FechaNacimiento+"','"+req.body.FechaAlta+"','"+req.body.Direccion+"','"+req.body.Email+"','"+req.body.CodigoPostal+"','"+req.body.CiudadSocio+"','"+req.body.PersonaContacto+"','"+req.body.MobilSocio+"','"+req.body.FijoSocio+"')",
      function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          res.json(results);  
        }
        client.end();         
    });   
    
});

app.put('/updatesocio',function(req,res){ 
    
    console.log(req.body.Nombre);
    console.log(req.body.IdSocio);
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');    
    client.query("UPDATE socios SET Nombre = '" +req.body.Nombre+
                                            "' , PrimerApellido = '" + req.body.PrimerApellido +
                                            "' , SegundoApellido = '" + req.body.SegundoApellido +
                                            "' , FechaNacimiento = '" + req.body.FechaNacimiento +
                                            "' , FechaAlta = '" + req.body.FechaAlta +
                                            "' , DNI = '" + req.body.DNI +
                                            "' , Direccion = '" + req.body.Direccion +
                                            "' , Email = '" + req.body.Email +
                                            "' , CodigoPostal = '" + req.body.CodigoPostal +
                                            "' , Ciudad = '" + req.body.CiudadSocio +
                                            "' , TelefonoMovil = '" + req.body.MobilSocio +
                                            "' , TelefonoFijo = '" + req.body.FijoSocio +
                                            "' , PersonaContacto = '" + req.body.PersonaContacto +
                                            "' WHERE IdSocio = '" + req.body.IdSocio + "'",
      
      function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          var aBack = { Nombre:req.body.Nombre , PrimerApellido:req.body.PrimerApellido ,
                             SegundoApellido:req.body.SegundoApellido , DNI:req.body.DNI ,
                             FechaNacimiento:req.body.FechaNacimiento , FechaAlta:req.body.FechaAlta ,
                             Direccion:req.body.Direccion , Email:req.body.Email ,
                             CodigoPostal:req.body.CodigoPostal , CiudadSocio:req.body.CiudadSocio ,
                             PersonaContacto:req.body.PersonaContacto , MobilSocio:req.body.MobilSocio };
          res.json(aBack);  
        }
        client.end();
        
        console.log(req.body.MobilSocio);
    });   
    
});

app.post('/buscarsocio',function(req,res){
    
    console.log(req.body.OrderSearch);
    console.log(req.body.ContentSearch);
    
    var OrderSearch = req.body.OrderSearch;
    
    Command = "SELECT * FROM socios WHERE " + req.body.OrderSearch + " = '" + req.body.ContentSearch + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);          
        }
        client.end();         
    });     
    
});

app.post('/buscarsociofiltro',function(req,res){
    
    console.log(req.body.OrderSearch);
    console.log(req.body.ContentSearch);
    
    var OrderSearch = req.body.OrderSearch;
    
    Command = "SELECT * FROM socios WHERE " + req.body.OrderSearch + " LIKE '%" + req.body.ContentSearch + "%'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);  
        }
        client.end();         
    });     
    
});

app.delete('/borrarsocio',function(req,res){
    
    console.log(req.body.IdSocio);
    
    Command = "DELETE FROM socios WHERE IdSocio = '" + req.body.IdSocio + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);  
        }
        client.end();         
    });
    
});

app.post('/cargarsocio',function(req,res){ 
    
    console.log(req.body.NombreCompleto);
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query("INSERT INTO master(IdSocio,NombreSocio,FechaSalida) VALUES ('"
                 +req.body.IdSocio+"','"+req.body.NombreCompleto+"','"+req.body.FechaSalida+"')",
      function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          res.json(results);  
        }
        client.end();         
    });   
    
});

app.post('/salvardetailgrid',function(req,res){ 
    
    //console.log(req.body.aGridData[0].id);
    //console.log('test:' + req.body.aGridData.length);
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');    
            
    var IniCommand = "INSERT INTO detail(IdLote,IdSocio,IdLibro,TituloLibro,FechaSalida) VALUES";
    var LastCommand = "";
    
    
    for (var i = 0; i < req.body.aGridData.length; i++){        
        if (i ==(req.body.aGridData.length -1)) {
           LastCommand = LastCommand + "('"+req.body.aGridData[i].IdLote+"','"+req.body.aGridData[i].IdSocio+"','"+req.body.aGridData[i].IdLibro+"','"+req.body.aGridData[i].TituloLibro+"','"+req.body.aGridData[i].FechaSalida+"');";
         }else{
           LastCommand = LastCommand + "('"+req.body.aGridData[i].IdLote+"','"+req.body.aGridData[i].IdSocio+"','"+req.body.aGridData[i].IdLibro+"','"+req.body.aGridData[i].TituloLibro+"','"+req.body.aGridData[i].FechaSalida+"'),";
        }
    };
    
    var AllCommand = IniCommand + LastCommand;
    
    client.query(AllCommand,
        function getLibro(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          res.json(results);  
        }
        client.end();         
    });  
    
});

app.post('/nuevolibro',function(req,res){ 
    
    console.log(req.body.TituloLibro);
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query("INSERT INTO libros(Titulo,Autor,Editorial,FechaDeAlta,IdiomaOriginal,DiasPermitidos) VALUES ('"
                 +req.body.TituloLibro+"','"+req.body.AutorLibro+"','"+req.body.EditorialLibro+"','"+req.body.FechaAltaLibro+"','"+req.body.IdiomaOriginalLibro+"','"+req.body.DiasPermitidosLibro+"')",
      function getSocio(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          res.json(results);  
        }
        client.end();         
    });   
    
});

app.put('/updatelibro',function(req,res){ 
    
    console.log(req.body.TituloLibro);
    console.log(req.body.CodeLibro);
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');    
    client.query("UPDATE libros SET Titulo = '" +req.body.TituloLibro+
                                            "' , Autor = '" + req.body.AutorLibro +
                                            "' , Editorial = '" + req.body.EditorialLibro +
                                            "' , FechaDeAlta = '" + req.body.FechaAltaLibro +
                                            "' , IdiomaOriginal = '" + req.body.IdiomaOriginalLibro +
                                            "' , DiasPermitidos = '" + req.body.DiasPermitidosLibro +
                                            "' WHERE IdLibro = '" + req.body.CodeLibro + "'",
      
      function getLibro(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          var aBack = { CodeLibro:req.body.CodeLibro };
          res.json(aBack);  
        }
        client.end();        
        
    });   
    
});

app.post('/buscarlibro',function(req,res){
    
    console.log(req.body.OrderSearch);
    console.log(req.body.ContentSearch);
    
    var OrderSearch = req.body.OrderSearch;
    
    Command = "SELECT * FROM libros WHERE " + req.body.OrderSearch + " = '" + req.body.ContentSearch + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getLibro(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);          
        }
        client.end();         
    });     
    
});

app.post('/buscarlibrofiltro',function(req,res){
    
    console.log(req.body.OrderSearch);
    console.log(req.body.ContentSearch);
    
    var OrderSearch = req.body.OrderSearch;
    
    Command = "SELECT * FROM libros WHERE " + req.body.OrderSearch + " LIKE '%" + req.body.ContentSearch + "%'";
       
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getLibro(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);          
        }
        client.end();         
    });     
    
});

app.delete('/borrarlibro',function(req,res){
    
    console.log(req.body.IdLibro);
    
    Command = "DELETE FROM libros WHERE IdLibro = '" + req.body.IdLibro + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function getLibro(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);  
        }
        client.end();         
    });
    
});

app.delete('/borrarrowgridmaster',function(req,res){
    
    console.log(req.body.CellLote);
    
    Command = "DELETE FROM master WHERE IdLote = '" + req.body.CellLote + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function delRow(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);  
        }
        client.end();         
    });
    
});

app.delete('/borrardetailgrid',function(req,res){
    
    console.log(req.body.CellLote);
    
    Command = "DELETE FROM detail WHERE IdLote = '" + req.body.CellLote + "'";
        
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');
        
    client.query( Command ,
    function delAllRows(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log(results);
          console.log(results.length);
          res.json(results);  
        }
        client.end();         
    });
    
});

app.put('/entradamastergrid',function(req,res){ 
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');    
    client.query("UPDATE master SET FechaEntrada = '" +req.body.FormattedDate+
                                            "' WHERE IdLote = '" + req.body.IdLote + "'",
      
      function entradamastergrid(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          var Back = { IdLote:req.body.IdLote };
          res.json(Back);  
        }
        client.end();        
        
    });   
    
});

app.put('/entradadetailgrid',function(req,res){ 
    
    var client = mysql.createConnection({
      
      user: 'root',
      password: 'charly',
      host: '',
      port: '3306',
            
    }); 
    client.query('USE biblioteca');    
    client.query("UPDATE detail SET FechaEntrada = '" +req.body.FormattedDate+
                                            "' WHERE IdLote = '" + req.body.IdLote + "'",
      
      function entradadetailgrid(err, results, fields) { 
        if (err) {
          console.log("Error: " + err.message);
          throw err;
          res.send(500,err.message);
        }else{
          console.log('saved to database');
          console.log(results);
          var Back = { IdLote:req.body.IdLote };
          res.json(Back);  
        }
        client.end();        
        
    });   
    
});