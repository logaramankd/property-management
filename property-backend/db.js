require('dotenv').config();
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

// Initialize knex connection
const knex = Knex(knexConfig.development);

// Bind all Objection.js models to this knex instance
Model.knex(knex);

module.exports = knex;
