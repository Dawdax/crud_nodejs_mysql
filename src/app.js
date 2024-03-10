const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2')
const myConnection = require('express-myconnection');

const app = express();

//importando rutas
const routes = require('./routes/customer');

//configuración 
app.set('port', process.env.PORT || 3000);
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'))

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crud_nodejs_mysql'
},'single'));

app.use(express.urlencoded({extended: false}));


//routes
app.use('/', routes);

//archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("Servidor en puerto 3000...")
})