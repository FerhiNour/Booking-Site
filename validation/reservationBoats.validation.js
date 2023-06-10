const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateReservationsBoats(data) {
  let errors = {};

  data.date = !isEmpty(data.date) ? data.date : "";
  data.hours = !isEmpty(data.hours) ? data.hours : "";
  data.nbre_person = !isEmpty(data.nbre_person) ? data.nbre_person : "";
  data.name_client = !isEmpty(data.name_client) ? data.name_client : "";
  data.email_client = !isEmpty(data.email_client) ? data.email_client : "";
  data.tel_client = !isEmpty(data.tel_client) ? data.tel_client : "";
  data.name_boat = !isEmpty(data.name_boat) ? data.name_boat : "";

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

  if (validator.isEmpty(data.nbre_person)) {
    errors.nbre_person = "Required nbre_person";
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
  if (validator.isEmpty(data.name_boat)) {
    errors.name_boat = "Required name_boat";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
