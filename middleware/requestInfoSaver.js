const RequestTrafficLogs = require("../model/requestTrafficLog");

const requestInfoSaver = async (req, res, next) => {
  const reqLog = {
    path: req._parsedUrl.pathname,
    createdAt: new Date(),
  };
  await RequestTrafficLogs.create(reqLog);
  next();
};

module.exports = requestInfoSaver;
