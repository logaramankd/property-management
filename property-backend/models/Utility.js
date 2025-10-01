const BaseModel = require("./BaseModel");
class Utility extends BaseModel {
  static get tableName() { return "utilities"; }
}
module.exports = Utility;