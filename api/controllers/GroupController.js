module.exports = {
  index: function (req, res) {
  	//res.view();
  },
  new: function (req,res){
    //res.view();
  },
  list: function (req, res) {
    //res.view();
  },
  create: function(req,res){
    var data = req.params.all();
    res.send(groupAPI.create(data));
  }
};
