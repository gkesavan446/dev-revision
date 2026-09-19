/* TOPIC: REUSABLE VALIDATION HELPERS */

const required = value => {
  return value === undefined || value === null || String(value).trim() === ""
    ? "This field is required"
    : null;
};

const positiveNumber = value => {
  return typeof value !== "number" || Number.isNaN(value) || value <= 0
    ? "Enter a positive number"
    : null;
};

const email = value => {
  const simpleEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return simpleEmailPattern.test(value) ? null : "Enter a valid email";
};

function validate(value, validators) {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return null;
}

function validateObject(values, schema) {
  const errors = {};

  for (const field of Object.keys(schema)) {
    const error = validate(values[field], schema[field]);
    if (error) errors[field] = error;
  }

  return errors;
}

const formValues = {
  name: "Kesavan",
  email: "invalid-email",
  amount: -10
};

const errors = validateObject(formValues, {
  name: [required],
  email: [required, email],
  amount: [required, positiveNumber]
});

console.log(errors);

/*
NOTE
Client validation improves user experience, but the server must validate again.
For production schemas, libraries such as Zod or Joi can provide stronger rules.

PRACTICE
Add minLength and oneOf validators. Validate a signup form without changing
the reusable validate and validateObject functions.
*/

