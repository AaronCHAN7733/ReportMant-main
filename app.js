const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('resources', express.static(__dirname + '/public'));


app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const connection = require('./databases/db');



app.get('/login', (req, res)=>{
    res.render('login');
});

app.get('/register', (req, res)=>{
    res.render('register');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.get('/follow', (req, res)=>{
    res.render('follow');
});

app.get('/formulario', (req, res)=>{
    res.render('formulario');
});

app.get('/record', (req, res)=>{
    res.render('record');
});

app.post ('/register', async(req, res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass, 8);
    connection.query ('INSERT INTO user SET ?', {
        user:user, name:name, pass:passwordHash
    }, async(error, result)=>{
        if(error){
            console.log(error);
        }else{
            res.render('register',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "¡Succesful Rregistration!",
                alertIcon: 'success',
                showconfirmbutton: false,
                timer:1500,
                ruta: ''
            })
        }
    })
})

app.post('/auth', async (req, res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass, 8);
    if(user && pass){
        connection.query('SELECT * FROM user WHERE user = ?', [user], async (error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
                res.render('login',{
                    alert:true,
                    alertTitle:"Error",
                    alertMessage:"Usuario y/o password incorrectas",
                    alertIcon: true,
                    showconfirmbutton: true,
                    timer: false,
                    ruta:'login'
                });
            }else{
                req.session.loggedin = true;
                req.session.name = results[0].user
                res.render('login',{
                    alert:true,
                    alertTitle:"Conexión Exitosa",
                    alertMessage:"¡Login Correcto!",
                    alertIcon: "success",
                    showconfirmbutton: false,
                    timer: 1500,
                    ruta:''
                });
            }
        })
    }else{
        res.render('login',{
            alert:true,
            alertTitle:"Advertencia",
            alertMessage:"¡Por favor ingrese un usuario y/o password!",
            alertIcon: "warning",
            showconfirmbutton: false,
            timer: false,
            ruta:'login'
        });
    }
})

app.get('/', (req, res)=>{
    if(req.session.loggedin){
        res.render('index1',{
            login: true,
            name: req.session.name
        });
    }else{
        res.render('index1', {
            login: false,
            name: 'Debe iniciar sessión'
        })
    }
})


app.get('/logout', (req, res)=>{
    req.session.destroy (()=>{
        res.redirect('/')
    })
})


app.listen(3000, (req, res)=> {
    console.log('server running in http://localhost:3000/');
});