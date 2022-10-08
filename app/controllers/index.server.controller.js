exports.render = function(req, res) {
    if (req.session.lastVisit) { 
        console.log(req.session.lastVisit); 
     }
  
    req.session.lastVisit = new Date();
  
    res.render('index', {
        title: 'Homepage',
        description: 'Hello, my name is Man Hon Cheung. This is my assignment 1. This is my Homepage.'
        
    })
}
