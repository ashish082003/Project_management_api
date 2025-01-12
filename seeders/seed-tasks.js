'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Task 1',
        description: 'First task for Project A',
        status: 'To Do',
        projectId: 1, // Belongs to Project A
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 2',
        description: 'Second task for Project A',
        status: 'In Progress',
        projectId: 1, // Belongs to Project A
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Task 3',
        description: 'First task for Project B',
        status: 'Done',
        projectId: 2, // Belongs to Project B
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
