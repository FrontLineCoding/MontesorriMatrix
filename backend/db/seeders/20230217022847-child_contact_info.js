'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ChildEmergencyContacts',
      [
        {
          childId: 1,
          firstName: 'FirstParent',
          lastName: 'One',
          relationship: 'Mother',
          phoneNumber: 1111111111,
        },
        {
          childId: 1,
          firstName: 'SecondParent',
          lastName: 'One',
          relationship: 'Father',
          phoneNumber: 1111111111,
        },
        {
          childId: 2,
          firstName: 'FirstParent',
          lastName: 'Two',
          relationship: 'Mother',
          phoneNumber: 1111111111,
        },
        {
          childId: 2,
          firstName: 'SecondParent',
          lastName: 'Two',
          relationship: 'Father',
          phoneNumber: 1111111111,
        },
        {
          childId: 3,
          firstName: 'FirstParent',
          lastName: 'Three',
          relationship: 'Mother',
          phoneNumber: 1111111111,
        },
        {
          childId: 3,
          firstName: 'SecondParent',
          lastName: 'Three',
          relationship: 'Father',
          phoneNumber: 1111111111,
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
