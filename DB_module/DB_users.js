var oracledb = require('oracledb');
var date = require('date-utils');
var dbConfig = require('./dbconfig.js');
var async = require('async');
var sql = require('./sql');

var newDate = new Date();
var date = newDate.toFormat('YYYY-MM-DD')

exports.join = function(values, callback){
    var name = values.name;
    var email = values.email;
	var pw = values.pw;
    var age = values.age;
    var gender = values.gender;
    var regdate = date;

	oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        function(err, conn){
		if(err){
            console.log('err',err);
            return;
		} else {
			conn.execute(sql.regester, [email, name, pw, gender, age, regdate], function(err, result){
				if(err) {
					console.error('err',err);
					conn.release();
				} else {
					conn.release();
					callback(result);
				}
			});
		}
	});
}