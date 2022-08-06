const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asignatura', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    creditos: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('básica','obligatoria','optativa'),
      allowNull: false
    },
    curso: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    cuatrimestre: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    id_profesor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'profesor',
        key: 'id_profesor'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'grado',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'asignatura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_profesor",
        using: "BTREE",
        fields: [
          { name: "id_profesor" },
        ]
      },
      {
        name: "id_grado",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
    ]
  });
};
