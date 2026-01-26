const mongoose = require("mongoose")


const maintenanceRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    
    },
    email: {
        type: String,
        required: true,
       
    },
    unitnumber: {
        type: Number,
        required: true
    },
    service: {
        type: String,
        enum: ["plumbing", "electrical", "carpentry", "cleaning"],
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    details: {
        type: String,
        default: ""
    },
    status :{
        type:Boolean,
        default:false
    }
}); 

const MaintenanceRequest = mongoose.model("MaintenanceRequest", maintenanceRequestSchema);

module.exports = MaintenanceRequest;


