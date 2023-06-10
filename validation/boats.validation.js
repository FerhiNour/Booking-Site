const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateBoats(data) {
  let errors = {};
  data.photo = !isEmpty(data.photo) ? data.photo : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.nbre_person = !isEmpty(data.nbre_person) ? data.nbre_person : "";
  data.moteur = !isEmpty(data.moteur) ? data.moteur : "";

  if (validator.isEmpty(data.photo)) {
    errors.photo = "Required photo";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Required name";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "Required description";
  }
  if (validator.isEmpty(data.nbre_person)) {
    errors.nbre_person = "Required Person Number";
  }
  if (validator.isEmpty(data.moteur)) {
    errors.moteur = "Required Motor Power";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
