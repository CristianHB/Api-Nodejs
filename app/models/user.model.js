module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "usuario",
    {
      id: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      cedula: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      creation_date: {
        type: Sequelize.DATE,
      },
    },
    {
      tableName: "tbl_usuario_node",
      timestamps: false,
    }
  );

  return User;
};
