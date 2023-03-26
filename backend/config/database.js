const config = require('./index');
module.exports = {
  development: {
    //TODO: storage is hardcoded, not an env variable
    // storage: './db/dev.db',
    storage: config.dbFile,
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    logQueryParameters: true,
    typeValidation: true,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    define: {
      schema: process.env.SCHEMA,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
