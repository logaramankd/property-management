const BaseModel = require("./BaseModel");
class ProjectFacility extends BaseModel {
  static get tableName() { return "project_facilities"; }
}
module.exports = ProjectFacility;