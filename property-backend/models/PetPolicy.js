const BaseModel = require("./BaseModel");
class PetPolicy extends BaseModel {
  static get tableName() { return "pet_policies"; }
}
module.exports = PetPolicy;