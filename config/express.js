var config = require('./env/development')
var session = require('express-session')
var express = require('express')
var morgan = require('morgan')
var compress = require('compression')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

module.exports = function() {
    var app = express()

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'))
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress())
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())
    app.use(methodOverride())

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }))

    app.set('views', './app/views')
    app.set('view engine', 'ejs')

    app.use(express.static('./public'))

    require('../app/routes/index.server.routes.js')(app)
  //  return app

    require('../app/routes/about.server.routes.js')(app)

    require('../app/routes/projects.server.routes.js')(app)

    require('../app/routes/services.server.routes.js')(app)

    require('../app/routes/content.server.routes.js')(app)



    return app;

    
}