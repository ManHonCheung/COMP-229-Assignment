exports.render = function(req, res) {
    if (req.session.lastVisit) { 
        console.log(req.session.lastVisit); 
     }
  
    req.session.lastVisit = new Date();
  
    res.render('projects', {
        title: 'Homepage',
        description: 'This is my website for assigment-1.'
        
    })
}

//npm run startApp