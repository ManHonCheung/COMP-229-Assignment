exports.render = function(req, res) {
    if (req.session.lastVisit) { 
        console.log(req.session.lastVisit); 
     }
  
    req.session.lastVisit = new Date();
  //file name
    res.render('aboutme', {
        title: 'About me',
        description: 'Hi, my name is Man Hon Cheung, I come from Hong Kong, This is my third semester. I like to challenge myself. My favorite sentence is "Stay hungry stay foolish.'
        
    })
}