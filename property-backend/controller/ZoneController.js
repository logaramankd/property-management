const Zone = require("../models/Zone");

exports.getAllZones = async (req, res) => {
  try {
    const zones = await Zone.query().withGraphFetched("project");
    res.json(zones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getZoneById = async (req, res) => {
  try {
    const zone = await Zone.query()
      .findById(req.params.id)
      .withGraphFetched("project");

    if (!zone) return res.status(404).json({ error: "Zone not found" });

    res.json(zone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createZone = async (req, res) => {
  try {
    const { name, project_id } = req.body;
    const zone = await Zone.query().insert({ name, project_id });
    res.status(201).json(zone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateZone = async (req, res) => {
  try {
    const { name, project_id } = req.body;
    const zone = await Zone.query().patchAndFetchById(req.params.id, {
      name,
      project_id,
    });

    if (!zone) return res.status(404).json({ error: "Zone not found" });

    res.json(zone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteZone = async (req, res) => {
  try {
    const rowsDeleted = await Zone.query().deleteById(req.params.id);

    if (!rowsDeleted) return res.status(404).json({ error: "Zone not found" });

    res.json({ message: "Zone deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
