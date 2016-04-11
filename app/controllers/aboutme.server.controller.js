exports.render = function (req,res) {
   res.render('aboutme',{
       title: 'Varin Upadhyay',
       myName: 'Varin',
       imgUrl:'../img/varin_logo.png',
       imgUrl1:'../img/varin2.jpg'
   })
 };