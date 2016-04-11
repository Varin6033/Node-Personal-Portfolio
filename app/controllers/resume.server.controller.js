exports.render = function (req,res) {
    res.render('resume',{
       title: 'Varin Upadhyay',
       myName: 'Varin',
       imgUrl:'../img/varin_logo.png',
       imgResume:'../img/page0001.jpg'
   })
 };