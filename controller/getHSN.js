const db = require('./../db/dbconnect');
const hsn = require('./../db/schema/gethsn');

module.exports = {
  get:function(req, res){
    var limit = parseInt(req.query.limit);
    var skip = (parseInt(req.query.skip)-1) * parseInt(limit);
        db.on('connected',()=> {console.log('MongoDB Connected')});
            hsn.find({},(err, data)=>{
             if (err)
                throw err;
             console.log('HSN fetched successfully!' );
      res.status(200).send({data:data});
    }).skip(skip).limit(limit)

  },
  search:function(req, res){
    var hsncode= 0;
    var limit = parseInt(req.query.limit);
    var skip = (parseInt(req.query.skip)-1) * parseInt(limit);
        db.on('connected',()=> {console.log('MongoDB Connected')});
        if(isNaN(req.query.test)){
          hsncode=0
        }else{
          hsncode = req.query.test;
        }
            hsn.find( {$or:[{ $text: { $search: req.query.test } },{'HSN_CODE': hsncode}]},(err, data)=>{
             if (err)
                throw err;
             console.log('HSN SEARCH fetched successfully!' );
      res.status(200).send({data:data});
    }).skip(skip).limit(limit)
  }
}
