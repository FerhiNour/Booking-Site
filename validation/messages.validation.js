const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateMessages(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.tel = !isEmpty(data.tel) ? data.tel : "";
  data.content = !isEmpty(data.content) ? data.content : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Required name";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Format Email required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Required email";
  }
  if (validator.isEmpty(data.tel)) {
    errors.tel = "Required Tel Number";
  }
  if (validator.isEmpty(data.content)) {
    errors.content = "Required content";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
