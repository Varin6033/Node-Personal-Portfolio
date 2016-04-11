exports.render = function (req,res) {
    res.render('service',{
       title: 'Varin Upadhyay',
       myName: 'Varin',
       imgUrl:'../img/varin_logo.png',
       imgPhp:'../img/php-mysql-project.gif',
       imgC:'../img/php-mysql-project.gif'
   })
 };