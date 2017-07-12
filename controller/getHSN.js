const db = require('./../db/dbconnect');
const hsn = require('./../db/schema/gethsn');

module.exports = {
  get:function(req, res){
    var limit = parseInt(req.query.limit);
    var skip = (parseInt(req.query.skip)-1) * parseInt(limit);
    console.log("{{{{{{{{{{{}}}}}}}}}}}", limit, skip)
      db.on('connected',()=> {console.log('MongoDB Connected')});
            hsn.find({},(err, data)=>{
             if (err)
                throw err;
             console.log('HSN fetched successfully!');
      res.status(200).send({data:data});
    }).skip(skip).limit(limit)
  }
}
