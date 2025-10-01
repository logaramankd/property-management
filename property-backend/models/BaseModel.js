const { Model } = require('objection');
const knex = require('../db');
Model.knex(knex);
class BaseModel extends Model { }
module.exports = BaseModel