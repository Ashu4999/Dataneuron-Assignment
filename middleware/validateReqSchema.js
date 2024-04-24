const validateReqSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate({ ...req.query, ...req.body });
    if (error) {
      // Return a 400 Bad Request response if validation fails
      return res.status(400).json({ error: error.details[0].message });
    }
    // If validation succeeds, proceed to the next middleware
    next();
  };
};

module.exports = validateReqSchema;
