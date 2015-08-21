var groupAPI = {};

// =============================================================================
// CRUD operations
// =============================================================================
groupAPI.create = function (data) {

  var exists = Host.find({ name: data.name });
  if(exists) return 'Error: Group name already exists';

  Group.native(function(err, collection) {
    if (err) return null;
    collection.insert(data).exec(function (err, results) {
      return (err)
      ? "There was an error creating the group"
      : "Successfully created group";
    });
  });
};

groupAPI.update = function (data) {
  Group.update({name:data.name},data).exec(function afterwards(err, updated) {
    return (err)
      ? 'error: ' + err
	    : null;
  });
};

groupAPI.delete = function (data) {
  Group.destroy({_id:data}).exec(function deleteCB(err) {
    return 'The record has been deleted';
  });
};

// =============================================================================
// Task CRUD operations
// =============================================================================
groupAPI.createTask = function (data) {

};

groupAPI.getTasks = function (data) {

};

groupAPI.removeTask = function (data) {

};

// Export API
module.exports = groupsAPI;
