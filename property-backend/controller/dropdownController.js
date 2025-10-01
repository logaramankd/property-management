// controllers/dropdownController.js
function createDropdownController(Model) {
  return {
    getAll: async (req, res) => {
      try {
        const items = await Model.query();
        res.json(items);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    getById: async (req, res) => {
      try {
        const item = await Model.query().findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Not found" });
        res.json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    create: async (req, res) => {
      try {
        const { name } = req.body;
        const item = await Model.query().insert({ name });
        res.status(201).json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    update: async (req, res) => {
      try {
        const { name } = req.body;
        const item = await Model.query().patchAndFetchById(req.params.id, { name });
        if (!item) return res.status(404).json({ error: "Not found" });
        res.json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
    delete: async (req, res) => {
      try {
        const deleted = await Model.query().deleteById(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Not found" });
        res.json({ message: "Deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}

module.exports = createDropdownController;
