const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateReservationsExcursions(data) {
  let errors = {};

  data.date = !isEmpty(data.date) ? data.date : "";
  data.hours = !isEmpty(data.hours) ? data.hours : "";
  data.nbre_adulte = !isEmpty(data.nbre_adulte) ? data.nbre_adulte : "";
  data.nbre_enfant = !isEmpty(data.nbre_enfant) ? data.nbre_enfant : "";
  data.name_client = !isEmpty(data.name_client) ? data.name_client : "";
  data.email_client = !isEmpty(data.email_client) ? data.email_client : "";
  data.tel_client = !isEmpty(data.tel_client) ? data.tel_client : "";
  data.note_client = !isEmpty(data.note_client) ? data.note_client : "";
  data.name_excursion = !isEmpty(data.name_excursion)
    ? data.name_excursion
    : "";

  if (validator.isEmpty(data.date)) {
    errors.date = "Required date";
  }
  if (!validator.isDate(data.date)) {
    errors.date = "Format Date required";
  }

  if (validator.isEmpty(data.hours)) {
    errors.hours = "Required hours";
  }
  if (!validator.isTime(data.hours)) {
    errors.hours = "Format hours required";
  }

  if (validator.isEmpty(data.nbre_adulte)) {
    errors.nbre_adulte = "Required nbre_adulte";
  }
  if (validator.isEmpty(data.nbre_enfant)) {
    errors.nbre_enfant = "Required nbre_enfant";
  }
  if (validator.isEmpty(data.name_client)) {
    errors.name_client = "Required name_client";
  }

  if (validator.isEmpty(data.email_client)) {
    errors.email_client = "Required email_client";
  }
  if (!validator.isEmail(data.email_client)) {
    errors.email_client = "Format Email required";
  }

  if (validator.isEmpty(data.tel_client)) {
    errors.tel_client = "Required tel_client";
  }

  // if (validator.isEmpty(data.name_excursion)) {
  //   errors.name_excursion = "Required name_excursion";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
