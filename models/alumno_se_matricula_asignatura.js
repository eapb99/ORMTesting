const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumno_se_matricula_asignatura', {
    id_alumno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persona',
        key: 'id'
      }
    },
    id_asignatura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'asignatura',
        key: 'id'
      }
    },
    id_curso_escolar: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso_escolar',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'alumno_se_matricula_asignatura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_alumno" },
          { name: "id_asignatura" },
          { name: "id_curso_escolar" },
        ]
      },
      {
        name: "id_asignatura",
        using: "BTREE",
        fields: [
          { name: "id_asignatura" },
        ]
      },
      {
        name: "id_curso_escolar",
        using: "BTREE",
        fields: [
          { name: "id_curso_escolar" },
        ]
      },
    ]
  });
};
