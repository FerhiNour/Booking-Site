const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidatePromotions(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.date_debut = !isEmpty(data.date_debut) ? data.date_debut : "";
  data.date_fin = !isEmpty(data.date_fin) ? data.date_fin : "";
  data.adulte = !isEmpty(data.adulte) ? data.adulte : "";
  data.enfant = !isEmpty(data.enfant) ? data.enfant : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Required name";
  }
  if (validator.isEmpty(data.date_debut)) {
    errors.date_debut = "Required date_debut";
  }
  if (!validator.isDate(data.date_debut)) {
    errors.date_debut = "Format Date required";
  }
  if (validator.isEmpty(data.date_fin)) {
    errors.date_fin = "Required date_fin";
  }
  if (!validator.isDate(data.date_fin)) {
    errors.date_fin = "Format Date required";
  }
  if (validator.isEmpty(data.adulte)) {
    errors.adulte = "Required Adulte Promotion";
  }

  if (parseFloat(data.adulte) < 1 || parseFloat(data.adulte) > 100) {
    errors.adulte = "Adulte Promotion should be between 1 and 100";
  }

  if (validator.isEmpty(data.enfant)) {
    errors.enfant = "Required Children Promotion";
  }

  if (parseFloat(data.enfant) < 1 || parseFloat(data.enfant) > 100) {
    errors.enfant = "Children Promotion should be between 1 and 100";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
