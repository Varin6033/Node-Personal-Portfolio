module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');
    var contact = require('../controllers/contact.server.controller.js');
    var resume = require('../controllers/resume.server.controller.js');
    var aboutme = require('../controllers/aboutme.server.controller.js');
    var projects = require('../controllers/projects.server.controller.js');
    var service = require('../controllers/service.server.controller.js');
    
    app.get('/',index.render);
    app.get('/index',index.render);
    app.get('/contact',contact.render);
    app.get('/resume',resume.render);
    app.get('/aboutme',aboutme.render);
    app.get('/projects',projects.render);
    app.get('/service',service.render);
}