const BaseModel = require("./BaseModel");

class TransactionType extends BaseModel {
  static get tableName() {
    return "transaction_types";
  }
}

module.exports = TransactionType;
