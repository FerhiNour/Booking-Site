const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateExcursions(data) {
  let errors = {};
  data.photo = !isEmpty(data.photo) ? data.photo : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.point_depart = !isEmpty(data.point_depart) ? data.point_depart : "";
  data.duree = !isEmpty(data.duree) ? data.duree : "";

  if (validator.isEmpty(data.photo)) {
    errors.photo = "Required photo";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Required name";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "Required description";
  }
  if (validator.isEmpty(data.point_depart)) {
    errors.point_depart = "Required Point-Depart";
  }
  if (validator.isEmpty(data.duree)) {
    errors.duree = "Required Duree";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
