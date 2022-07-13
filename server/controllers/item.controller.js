

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');
var SignUp = function (req, res) {
  var insert = "INSERT INTO Users SET ?"
  var params = {

      first_name: req.body.first_name,
      last_name: req.body.last_name,
      card_id: req.body.card_id,
      password:req.body.password,
      email:req.body.email,
      phone_number:req.body.phone_number,


  }
  db.query(insert, params,(err,result) => {
      if(err) {
          console.log(err)
      }else{
          res.send(result)
      }
  })
}

// UNCOMMENT IF USING MYSQL WITH CALLBACKS


// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = {SignUp};
