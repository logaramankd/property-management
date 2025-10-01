const BaseModel = require("./BaseModel");
class View extends BaseModel {
  static get tableName() { return "views"; }
}
module.exports = View;