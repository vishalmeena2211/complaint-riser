const express = require("express");
const router  = express.Router();

const {signUp,login} = require('../controllers/Auth');
const citizen = require('../controllers/citizen');
const counsellor = require('../controllers/counsellor');
const complaintController = require('../controllers/Complaint');
router.post('/signup',signUp);
router.post('/login',login);

router.post('/createcomplaint', complaintController.createComplaint);

router.get('/listcomplaint', complaintController.getComplaints);

router.get('/getcomplaint/:id', complaintController.getComplaintById);

router.put('/updatecomplaint/:id', complaintController.updateComplaint);

router.delete('/deletecomplaint/:id', complaintController.deleteComplaint);

router.post('/create', citizen.createOfficeTableEntry);

router.get('/list', citizen.getOfficeTableEntries);

router.post('/get', citizen.getOfficeTableEntryById);

router.put('/update/:id', citizen.updateOfficeTableEntry);

router.delete('/delete/:id', citizen.deleteOfficeTableEntry);


router.post('/createCounsellor', counsellor.createOfficeTableEntry);

router.get('/listCounsellor', counsellor.getOfficeTableEntries);

router.get('/getCounsellor/:id', counsellor.getOfficeTableEntryById);

router.put('/updateCounsellor/:id', counsellor.updateOfficeTableEntry);

router.delete('/deleteCounsellor/:id', counsellor.deleteOfficeTableEntry);

module.exports=router;