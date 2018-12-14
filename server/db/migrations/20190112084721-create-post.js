module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Posts',
    {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      title: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      excerpt: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
      },
      view: {
        type: Sequelize.INTEGER,
      },
      slug: {
        unique: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('Posts'),
};
