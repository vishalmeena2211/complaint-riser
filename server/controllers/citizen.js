const OfficeTable = require('../models/citizen'); 
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken')

const createOfficeTableEntry = async (req, res) => {
  try {
    const {name,gender,address,aadharNo,password} = req.body;
    const checkExistance = await OfficeTable.findOne({aadharNo});
    if(checkExistance){
      return res.status(401).json({
          success:false,
          message:"Account already exist with this email adress"
      });
  }


  const hashedpassword = await bcrypt.hash(password,10);

        

  const savedData = await OfficeTable.create({
    name,gender,address,aadharNo,password:hashedpassword
  });
  console.log("Data save succesfully");

  return res.status(200).json({
      success:true,
      message:"data Saved successfully",
      data:savedData

  });


    // const officeTable = new OfficeTable(req.body);

    // const savedOfficeTable = await officeTable.save();
    // res.status(201).json(savedOfficeTable);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the OfficeTable entry' });
  }
};

const getOfficeTableEntries = async (req, res) => {
  try {
    const officeTableEntries = await OfficeTable.find();
    res.json(officeTableEntries);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve OfficeTable entries' });
  }
};

const getOfficeTableEntryById = async (req, res) => {
  try {
    console.log(req.body)
    const jwtCookie = req.body.token; 
    let userId;
    if (jwtCookie) {
      try {
        const decoded = jwt.verify(jwtCookie, 'vishalmeena'); 
  
        userId = decoded.id; 
  
      } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).send('JWT is invalid');
      }
    } else {
      // res.status(401).send('JWT cookie not found');
    }



    // const officeTableEntry = await OfficeTable.findById(req.params.id);
    const officeTableEntry = await OfficeTable.findById(userId);
    console.log(userId)
    

    if (!officeTableEntry) {
      return res.status(404).json({ error: 'OfficeTable entry not found' });
    }
    officeTableEntry.password = null;
    res.json(officeTableEntry);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the OfficeTable entry' });
  }
};


const updateOfficeTableEntry = async (req, res) => {
  try {
    const updatedOfficeTableEntry = await OfficeTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOfficeTableEntry) {
      return res.status(404).json({ error: 'OfficeTable entry not found' });
    }
    res.json(updatedOfficeTableEntry);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the OfficeTable entry' });
  }
};

const deleteOfficeTableEntry = async (req, res) => {
  try {
    const deletedOfficeTableEntry = await OfficeTable.findByIdAndDelete(req.params.id);
    if (!deletedOfficeTableEntry) {
      return res.status(404).json({ error: 'OfficeTable entry not found' });
    }
    res.json({ message: 'OfficeTable entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the OfficeTable entry' });
  }
};

module.exports = {
  createOfficeTableEntry,
  getOfficeTableEntries,
  getOfficeTableEntryById,
  updateOfficeTableEntry,
  deleteOfficeTableEntry,
};
