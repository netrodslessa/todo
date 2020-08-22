const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  macaddress: {type: String, required: true},
  type: {type: Number, required: true},
  title: {tipe: String, required: true},
  description: {type: String, required: true},
  when: {type: Date, required: true},
  done: {tipe: Boolean, default: false},
  created: {type: Date, default: Date.now()}
});

module.export = mongoose.model('Task', TaskSchema);