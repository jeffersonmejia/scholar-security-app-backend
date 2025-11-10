var mysql = require('mysql');
console.log("entra a conexion");
var pool = mysql.createPool({
	host		:	'localhost',
	user		:	'root',
	password	:	'VincProj2021',
	database	:	'mies',
	multipleStatements: true
});

var getConnection = function (cb){
	pool.getConnection(function(err, connection){
		if(err){
			console.log("error conexion");
			console.log(err);
			return cb(err);
		}
		cb(null, connection);
	});
};

module.exports = getConnection;
