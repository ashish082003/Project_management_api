const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Project, { foreignKey: 'projectId' });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
      projectId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'Task' }
  );
  return Task;
};
