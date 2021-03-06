const Joi = require('joi');

const textRule = Joi.string().min(2).pattern(/^[a-zA-ZÀ-ÿ0-9 ']+$/);
const numberRule = Joi.number().min(0);

module.exports = Joi.object({
    name: textRule,
    level: textRule,
    address: textRule,
    zip_code: textRule,
    city: textRule,
    country: textRule,
    landmark: textRule,
    id_user: numberRule,
    id_category: numberRule,
});
