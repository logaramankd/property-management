const BaseModel = require("./BaseModel");
class PropertyType extends BaseModel {
    static get tableName() { return "property_types"; }
}
module.exports = PropertyType;