const mongoose = require('mongoose');

const officeTableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  aadharNo: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  complaintlist: { type: Array, default: [] },
});

const citizen = mongoose.model('citizen', officeTableSchema);

module.exports = citizen;
