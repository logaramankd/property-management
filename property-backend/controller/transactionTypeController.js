const TransactionType = require("../models/TransactionType");

exports.getAll = async (req, res) => {
  try {
    const types = await TransactionType.query();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const type = await TransactionType.query().findById(req.params.id);
    if (!type) return res.status(404).json({ error: "Not found" });
    res.json(type);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const type = await TransactionType.query().insert({ name });
    res.status(201).json(type);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { name } = req.body;
    const type = await TransactionType.query().patchAndFetchById(req.params.id, { name });
    if (!type) return res.status(404).json({ error: "Not found" });
    res.json(type);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await TransactionType.query().deleteById(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
