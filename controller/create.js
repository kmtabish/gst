const db = require('./../db/dbconnect');
const task = require('./../db/schema/task');
module.exports = {
  post:function(req, res){
    console.log(req.body)
    db.on('connected',()=> {console.log('MongoDB Connected')});
    var addTask = new task({
      id:req.body.id,
      name:req.body.name,
      date: new Date(req.body.date),
      isCompleted: req.body.isCompleted,
      priority: req.body.priority,
      userId:req.body.userId
    })

    addTask.save(function(err){
      if (err) throw err;
      console.log('Task saved successfully!');
     res.status(200).send({status:"success"});
    })
  }
}