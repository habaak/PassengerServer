exports.success = {isSuccess : 1};

exports.login = 'select email from passenger where email=? and pw=?';

exports.regester = 'insert into passenger values(seq_useridx.nextval, ?, ?, ?, ?, ?, date_format(?, "%y-%m-%d"))';

//insert into passenger values (seq_useridx.nextval,'joonha@naver.com','joonha','111111','f',12,sysdate)