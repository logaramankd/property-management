const BaseModel = require("./BaseModel");
class OwnerType extends BaseModel {
  static get tableName() { return "owner_types"; }
}
module.exports = OwnerType;