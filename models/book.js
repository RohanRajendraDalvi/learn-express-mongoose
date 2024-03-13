var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author:{type: Schema.Types.ObjectId , required: true, ref:'Author'},
    summary:{type: String },
    ISBN:{type: String},
    genre:[{type: Schema.Types.ObjectId , ref:'Genre'}]
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
