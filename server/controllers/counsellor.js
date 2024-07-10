const OfficeTable = require('../models/counsellor'); 
const createOfficeTableEntry = async (req, res) => {
  try {
    const officeTable = new OfficeTable(req.body);
    const savedOfficeTable = await officeTable.save();
    res.status(201).json(savedOfficeTable);
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
    const officeTableEntry = await OfficeTable.findById(req.params.id);
    if (!officeTableEntry) {
      return res.status(404).json({ error: 'OfficeTable entry not found' });
    }
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
