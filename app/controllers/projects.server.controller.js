exports.render = function (req,res) {
    
   res.render('projects',{
       title: 'Varin Upadhyay',
       myName: 'Varin',
       imgUrl:'../img/varin_logo.png',
       imgWeb:'../img/web.jpg',
       imgJava:'../img/java.jpg',
       imgOracle:'../img/oracle.jpg'
   })
 };