'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Guide extends Model {
    static getCurrentUserById(id) {
      return User.scope('currentUser').findByPk(id);
    }
    static async login({ username, password }) {
      const { Op } = require('sequelize');
      const user = await Guide.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: username,
          },
        },
      });
      if (user && user.validatePassword(password)) {
        return await Guide.scope('currentUser').findByPk(user.id);
      }
    }
    static async signup({ username, password }) {
      const checkedPassword = bcrypt.hashSync(password);
      const user = await Guide.create({
        username,
        checkedPassword,
      });
      return await Guide.scope('currentUser').findByPk(user.id);
    }

    static associate(models) {
      Guide.hasMany(models.Child, { foreignKey: 'guideId' });
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.password.toString());
    }
  }
  Guide.init(
    {
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING.BINARY },
    },
    {
      sequelize,
      modelName: 'Guide',
    }
  );
  return Guide;
};
