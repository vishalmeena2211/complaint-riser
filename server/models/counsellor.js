const mongoose = require('mongoose');

const officeTableSchema = new mongoose.Schema({
  officeNo: { type: String, required: true },
  counselorName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  wardNo: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const counsellor = mongoose.model('counsellor', officeTableSchema);

module.exports = counsellor;
