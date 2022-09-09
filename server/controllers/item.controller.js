

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

var Loca_car = function (req, res) {
    var insert = "INSERT INTO location_car SET ?"
    var params = {
  
        name_car: req.body.name_car,
        describe_car: req.body.describe_car,
        image_location: req.body.image_location,
        price_1:req.body.price_1,
        price_2:req.body.price_2,
        price_3:req.body.price_3,
  
  
    }
    db.query(insert, params,(err,result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result)
        }
    })
  }
  var select_Loca_car=function(req, res) {
    var select = "SELECT * FROM location_car"
    db.query(select,(err,result)=>{
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
  }
  var select_idloca = function (req, res) {
    var params = req.params.id_location

    var sql = "SELECT * from location_car where id_location=?"
  
    db.query(sql, [params],(err,result) => {
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

module.exports = {SignUp,Loca_car,select_Loca_car,select_idloca};
