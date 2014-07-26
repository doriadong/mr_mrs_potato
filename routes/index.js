
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.userlist = function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
};

exports.toMongo = function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.insert({"a":"b"});
        res.render('userlist', {
            "userlist" : ''
        });
    };
};