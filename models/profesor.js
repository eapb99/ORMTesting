const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesor', {
    id_profesor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persona',
        key: 'id'
      }
    },
    id_departamento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'departamento',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'profesor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_profesor" },
        ]
      },
      {
        name: "id_departamento",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
    ]
  });
};
