'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildAllergy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChildAllergy.belongsTo(models.Child, { foreignKey: 'allergiesId' });
    }
  }
  ChildAllergy.init(
    {
      childId: { type: DataTypes.INTEGER, allowNull: false },
      allergy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ChildAllergy',
    }
  );
  return ChildAllergy;
};
