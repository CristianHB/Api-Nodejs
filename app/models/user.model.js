module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usuario", {
        codigo: {
            type: Sequelize.STRING,
        },
        nombre: {
            type: Sequelize.STRING,
        },
        cedula: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        contrasena: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
        fecha: {
            type: Sequelize.DATE
        },
        vendedor: {
            type: Sequelize.STRING
        },
        premium: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'tbl_usuario_node',
        timestamps: false,
    });

    return User;
};