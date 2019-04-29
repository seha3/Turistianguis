var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'content'
});

//here you create the connection whit your db

const connection = mysql.createConnection(config);


//here you create a query to take the informantion from your db

 const makeInput = cb => {
   connection.query(
     "INSERT INTO comments VALUE (?)",(err, results) => {
       if (err){
         console.log("this is the err:",err)
       }
     } else {
       cb(results)
     }
   )
 };


 module.exports = {
makeInput
};
