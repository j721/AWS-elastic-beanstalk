const mongoose = require("mongoose");

//allows for mongoose to be used in different positions inside the code as it is now viewed inglobal mode
//Promise allows for asynchronous implementation in the code
mongoose.Promise = global.Promise;

var isConnected;

module.exports = async = () => {
  if (isConnected) return Promise.resolve();

  return mongoose.connect(process.env.DB).then((db) => {
    isConnected = db.connections[0].readyState;
  });
};
