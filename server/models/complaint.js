const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  complaintBy: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  wardNo: { type: String, required: true },
  status: { type: String, default: 'Initiated' },
  witness1Status: { type: String, default: 'Not Approved' },
  witness2Status: { type: String, default: 'Not Approved' },
  aadharNo: { type: String, required: true },
  remark1: { type: String },
  remark2: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
