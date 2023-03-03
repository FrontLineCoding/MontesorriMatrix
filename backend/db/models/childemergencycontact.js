'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildEmergencyContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChildEmergencyContact.belongsTo(models.Child, {
        foreignKey: 'emergencyContactInfo',
      });
    }
  }
  ChildEmergencyContact.init(
    {
      childId: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      relationship: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ChildEmergencyContact',
    }
  );
  return ChildEmergencyContact;
};
