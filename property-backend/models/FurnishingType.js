const BaseModel = require("./BaseModel");
class FurnishingType extends BaseModel {
  static get tableName() { return "furnishing_types"; }
}
module.exports = FurnishingType;