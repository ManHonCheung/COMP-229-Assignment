module.exports = function(app) {
    var index = require('../controllers/content.server.controller')
    app.get('/content', index.render)
    // console.log(`Rendering '/' from index.server.controller`)
}