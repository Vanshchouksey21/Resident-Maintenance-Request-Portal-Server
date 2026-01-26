const express = require("express");
const jwt = require("jsonwebtoken");
const MaintenanceRequest = require("../models/maintenanceRequestsModel");


const loginController = (req, res) => {
  const { email, password } = req.body;
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.json({
    message: "Login successful",
    token,
  });
};

const closeController = async (req, res) => {
try {
    const { _id } = req.params;

    const getData = await MaintenanceRequest.findById(_id);
     console.log(getData);

    if(!getData){
      return res.status(400).send({msg:"Bad request "})
    }
    getData.status = true ;
  await  getData.save();
 
  

  res.status(200).json({
    success: true,
    message: "updated successfully",
    data: getData,
  });
} catch (error) {
  res.status(500).json({
      success: false,
      message: " Internal Server error",
      error: error.message,
    });
}
};

module.exports = {
  loginController,
  closeController,
};
