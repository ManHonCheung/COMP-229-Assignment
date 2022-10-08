module.exports = function(app) {
    var about = require('../controllers/about.server.controller')
    app.get('/about', about.render)//url
    // console.log(`Rendering '/' from about.server.controller`)
}