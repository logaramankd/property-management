const BaseModel = require("./BaseModel");
class LandUseType extends BaseModel {
  static get tableName() { return "land_use_types"; }
}
module.exports = LandUseType;