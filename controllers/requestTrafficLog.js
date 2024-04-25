const RequestTrafficLogs = require("../model/requestTrafficLog");

const getRequestWiseCount = async (req, res) => {
  try {
    let pipeline = [
      {
        $group: { _id: "$path", count: { $sum: 1 } },
      },
      {
        $project: { path: "$_id", count: 1, _id: 0 },
      },
    ];
    const response = await RequestTrafficLogs.aggregate(pipeline);
    return res.send(response);
  } catch (Exception) {
    console.log(Exception);
    return res.status(500).json({ messsage: Exception });
  }
};

module.exports = { getRequestWiseCount };
