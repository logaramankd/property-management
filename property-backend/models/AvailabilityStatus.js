const BaseModel = require("./BaseModel");
class AvailabilityStatus extends BaseModel {
  static get tableName() { return "availability_statuses"; }
}
module.exports = AvailabilityStatus;
