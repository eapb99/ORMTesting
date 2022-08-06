const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nif: {
      type: DataTypes.STRING(9),
      allowNull: true,
      unique: "nif"
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    apellido1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM('H','M'),
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('profesor','alumno'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'persona',
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
        name: "nif",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nif" },
        ]
      },
    ]
  });
};
