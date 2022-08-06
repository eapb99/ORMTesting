var DataTypes = require("sequelize").DataTypes;
var _alumno_se_matricula_asignatura = require("./alumno_se_matricula_asignatura");
var _asignatura = require("./asignatura");
var _curso_escolar = require("./curso_escolar");
var _departamento = require("./departamento");
var _grado = require("./grado");
var _persona = require("./persona");
var _profesor = require("./profesor");

function initModels(sequelize) {
  var alumno_se_matricula_asignatura = _alumno_se_matricula_asignatura(sequelize, DataTypes);
  var asignatura = _asignatura(sequelize, DataTypes);
  var curso_escolar = _curso_escolar(sequelize, DataTypes);
  var departamento = _departamento(sequelize, DataTypes);
  var grado = _grado(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var profesor = _profesor(sequelize, DataTypes);

  alumno_se_matricula_asignatura.belongsTo(asignatura, { as: "id_asignatura_asignatura", foreignKey: "id_asignatura"});
  asignatura.hasMany(alumno_se_matricula_asignatura, { as: "alumno_se_matricula_asignaturas", foreignKey: "id_asignatura"});
  alumno_se_matricula_asignatura.belongsTo(curso_escolar, { as: "id_curso_escolar_curso_escolar", foreignKey: "id_curso_escolar"});
  curso_escolar.hasMany(alumno_se_matricula_asignatura, { as: "alumno_se_matricula_asignaturas", foreignKey: "id_curso_escolar"});
  profesor.belongsTo(departamento, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamento.hasMany(profesor, { as: "profesors", foreignKey: "id_departamento"});
  asignatura.belongsTo(grado, { as: "id_grado_grado", foreignKey: "id_grado"});
  grado.hasMany(asignatura, { as: "asignaturas", foreignKey: "id_grado"});
  alumno_se_matricula_asignatura.belongsTo(persona, { as: "id_alumno_persona", foreignKey: "id_alumno"});
  persona.hasMany(alumno_se_matricula_asignatura, { as: "alumno_se_matricula_asignaturas", foreignKey: "id_alumno"});
  profesor.belongsTo(persona, { as: "id_profesor_persona", foreignKey: "id_profesor"});
  persona.hasOne(profesor, { as: "profesor", foreignKey: "id_profesor"});
  asignatura.belongsTo(profesor, { as: "id_profesor_profesor", foreignKey: "id_profesor"});
  profesor.hasMany(asignatura, { as: "asignaturas", foreignKey: "id_profesor"});

  return {
    alumno_se_matricula_asignatura,
    asignatura,
    curso_escolar,
    departamento,
    grado,
    persona,
    profesor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
