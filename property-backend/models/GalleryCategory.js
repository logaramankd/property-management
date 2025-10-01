const BaseModel = require("./BaseModel");
class GalleryCategory extends BaseModel {
  static get tableName() { return "gallery_categories"; }
}
module.exports = GalleryCategory;