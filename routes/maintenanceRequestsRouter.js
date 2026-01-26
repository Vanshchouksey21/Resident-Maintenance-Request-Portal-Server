const express = require("express")
const { createMaintenanceRequest, getAllMaintenanceRequests } = require("../controllers/maintenanceRequestsController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router()

router.post("/maintenance-requests" , createMaintenanceRequest)
router.get("/maintenance-requests" ,authMiddleware , getAllMaintenanceRequests);

module.exports = router