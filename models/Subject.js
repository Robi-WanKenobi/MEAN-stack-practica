var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubjectSchema = new mongoose.Schema({
  nombre:  String,
  tipo: String,
  estudiantes: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Subject', SubjectSchema);
