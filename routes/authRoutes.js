const passport = require('passport');

module.exports = (app) => {

    app.post('/auth/local', passport.authenticate('local'), (req, res) => {
        console.log('request: ',req);
        res.send(req.user);
    });

    app.get('/api/logout', (req, res)=> {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    });
}

