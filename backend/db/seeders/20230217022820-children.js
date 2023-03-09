'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Children',
      [
        {
          firstName: 'Child1',
          lastName: 'One',
          emergencyContactInfo: null,
          allergiesId: null,
          guideId: 1,
        },
        {
          firstName: 'Child2',
          lastName: 'Two',
          emergencyContactInfo: null,
          allergiesId: null,
          guideId: 1,
        },
        {
          firstName: 'Child3',
          lastName: 'Three',
          emergencyContactInfo: null,
          allergiesId: null,
          guideId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
