exports.render = function (req,res) {
   res.render('index',{
       title: 'Varin Upadhyay',
       myName: 'Varin',
       imgUrl:'../img/varin_logo.png',
       imgUrl2:'../img/varin2.jpg'
   })
 };