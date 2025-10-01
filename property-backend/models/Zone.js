const BaseModel = require("./BaseModel");
const Project = require("./Project");

class Zone extends BaseModel {
  static get tableName() {
    return "zones";
  }

  static get relationMappings() {
    return {
      project: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "zones.project_id",
          to: "projects.id",
        },
      },
    };
  }
}

module.exports = Zone;
