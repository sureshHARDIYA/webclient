module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ConnectRelations', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      seq: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      targetId: {
        type: Sequelize.STRING,
      },
      sourceId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }),
  down: (queryInterface) => queryInterface.dropTable('ConnectRelations'),
};
