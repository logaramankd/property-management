const BaseModel = require("./BaseModel");
class Orientation extends BaseModel {
  static get tableName() { return "orientations"; }
}
module.exports = Orientation;