'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Child.belongsToMany(models.Activity, {
        through: models.Child_Activity,
        foreignKey: 'childId',
      });
      Child.belongsTo(models.Guide, {foreignKey: 'guideId'});
      Child.hasMany(models.ChildAllergy, { foreignKey: 'childId' });
      Child.hasMany(models.ChildEmergencyContact, { foreignKey: 'childId' });
      Child.belongsTo(models.GuideNote, { foreignKey: 'childId' });
    }
  }
  Child.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      emergencyContactInfo: DataTypes.INTEGER,
      allergiesId: DataTypes.INTEGER,
      guideId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Child',
    }
  );
  return Child;
};
