const MaintenanceRequest = require("../models/maintenanceRequestsModel");


const createMaintenanceRequest  = async(req , res) =>{
    try {
        const newRequest = await MaintenanceRequest.create(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to create request", error: error.message });
    }
}

const getAllMaintenanceRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find()

    res.status(200).json({
      message: "All maintenance requests",
      data: requests,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch maintenance requests",
      error: error.message,
    });
  }
};



module.exports = {
  createMaintenanceRequest , getAllMaintenanceRequests
}
