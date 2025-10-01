const BaseModel = require("./BaseModel");
class ParkingOption extends BaseModel {
  static get tableName() { return "parking_options"; }
}
module.exports = ParkingOption;