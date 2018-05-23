var express = require('express');
var router = express.Router();
var DB_users = require('../DB_module/DB_users');
var sql = require()
var oracledb = require('oracledb');




router.post('/join', function(req, res){
	var values = {};
	values.email = req.body.email;
	values.name = req.body.name;
	values.pw = req.body.pw;
	values.age = req.body.age;
    values.gender = req.body.gender;

	if (values.pw == values.pwd) {
		DB_users.join(values, function(data){
			if(data.affectedRows == 1) {
				res.json(sql.success);
			}else{
				res.json({"isSuccess" : 0, "message" : "회원가입에 실패했습니다."});
			}
		});
	} else {
		res.json({"isSuccess" : 0, "message" : "비밀번호가 일치하지 않습니다."});
	}
});